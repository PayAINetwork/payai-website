const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { createRequire } = require("node:module");
const { resolve } = require("node:path");
const { test } = require("node:test");
const ts = require("typescript");

// Load actual pure document builders with the existing TypeScript dependency.
// No network requests, credentials, payment calls or app server are involved.
const root = resolve(__dirname, "../src");
const cache = new Map();
function load(path) {
  const filename = resolve(root, path);
  if (cache.has(filename)) return cache.get(filename).exports;
  if (filename.endsWith(".json")) return JSON.parse(readFileSync(filename, "utf8"));
  const module = { exports: {} };
  cache.set(filename, module);
  const compiled = ts.transpileModule(readFileSync(filename, "utf8"), {
    fileName: filename,
    compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
  }).outputText;
  const localRequire = (id) => id.startsWith("@/")
    ? load(id.slice(2) + (id.endsWith(".json") ? "" : ".ts"))
    : createRequire(filename)(id);
  new Function("require", "module", "exports", compiled)(localRequire, module, module.exports);
  return module.exports;
}

const { buildOpenApiDocument } = load("lib/agent/openapi.ts");
const { AUTHORED_PAGES } = load("lib/agent/pages.ts");
const { buildLlmsTxt, buildLlmsFullTxt } = load("lib/agent/llms.ts");
const { FAQ_DATA } = load("data/faq.ts");
const guidance = load("lib/agent/payment-guidance.ts");
const spec = buildOpenApiDocument();
const developer = AUTHORED_PAGES["/developers"]();
const pages = Object.entries(AUTHORED_PAGES).map(([path, build]) => ({ path, markdown: build() }));
const full = buildLlmsFullTxt(pages);

test("developer, agent and OpenAPI guides share JWT and recovery instructions", () => {
  for (const text of [developer, buildLlmsTxt(), full, spec.info.description]) {
    assert.ok(text.includes(guidance.AUTHENTICATION_GUIDANCE));
    assert.doesNotMatch(text, /Bearer <api-key>|Bearer pk_live_|always JSON|JSON on every status|retrying cannot double-charge|before the endpoints stop accepting/);
  }
  for (const text of [developer, buildLlmsTxt(), full, spec.paths["/settle"].post.description]) {
    assert.ok(text.includes(guidance.RECOVERY_GUIDANCE));
  }
  assert.match(guidance.AUTHENTICATION_GUIDANCE, /Every batch-settlement.*requires merchant authentication/);
  assert.match(guidance.AUTHENTICATION_GUIDANCE, /never send the raw secret/);
  assert.match(guidance.RECOVERY_GUIDANCE, /transaction field can be empty/);
  assert.match(guidance.RECOVERY_GUIDANCE, /bounded, scheme-dependent retention/);
});

test("FAQ used by HTML, JSON-LD and Markdown retains the shared correction", () => {
  assert.equal(FAQ_DATA.find(x => x.question.startsWith("Do I need")).answer, guidance.AUTHENTICATION_GUIDANCE);
  assert.equal(FAQ_DATA.find(x => x.question.startsWith("What happens")).answer,
    `${guidance.ERROR_GUIDANCE} ${guidance.RECOVERY_GUIDANCE}`);
  assert.ok(AUTHORED_PAGES["/"]().includes(guidance.AUTHENTICATION_GUIDANCE));
});

test("OpenAPI models bearer JWT, public reads and documented conditional payment auth", () => {
  assert.deepEqual(spec.security, []);
  assert.equal(spec.components.securitySchemes.bearerJwt.bearerFormat, "JWT");
  assert.equal(spec.components.securitySchemes.bearerJwt.scheme, "bearer");
  assert.equal(spec.components.securitySchemes.bearerApiKey, undefined);
  for (const path of ["/verify", "/settle"]) {
    const operation = spec.paths[path].post;
    assert.deepEqual(operation.security, [{ bearerJwt: [] }, {}]);
    assert.ok(operation.description.includes(guidance.AUTHENTICATION_GUIDANCE));
    assert.ok(operation.responses["401"]);
    assert.deepEqual(spec.paths[path].get.security, []);
  }
  assert.deepEqual(spec.paths["/supported"].get.security, [{ bearerJwt: [] }, {}]);
  assert.equal(spec.paths["/supported"].get.parameters, undefined); // Authorization is a security scheme, not an ignored header parameter.
  assert.ok(spec.paths["/settle"].post.responses["409"]);
});

test("versioned envelopes distinguish v1 top-level fields from v2 accepted requirements", () => {
  const schemas = spec.components.schemas;
  assert.deepEqual(schemas.PaymentPayload.oneOf, [
    { $ref: "#/components/schemas/PaymentPayloadV1" },
    { $ref: "#/components/schemas/PaymentPayloadV2" },
  ]);
  assert.deepEqual(schemas.PaymentPayloadV1.properties.x402Version.enum, [1]);
  assert.deepEqual(schemas.PaymentPayloadV2.properties.x402Version.enum, [2]);
  assert.deepEqual(schemas.PaymentPayloadV1.required, ["x402Version", "scheme", "network", "payload"]);
  assert.deepEqual(schemas.PaymentPayloadV2.required, ["x402Version", "accepted", "payload"]);
  assert.equal(schemas.PaymentPayloadV2.properties.accepted.$ref, "#/components/schemas/PaymentRequirementsV2");
  assert.deepEqual(schemas.PaymentPayloadV2.properties.resource.required, ["url"]);
  assert.ok(schemas.PaymentRequirementsV1.required.includes("maxAmountRequired"));
  assert.ok(schemas.PaymentRequirementsV2.required.includes("amount"));
  for (const version of [1, 2]) {
    assert.ok(schemas[`PaymentRequirementsV${version}`].required.includes("maxTimeoutSeconds"));
  }
  assert.ok(!schemas.SettleResponse.required.includes("payer"));
  assert.match(schemas.SettleResponse.properties.transaction.description, /not proof that nothing was broadcast/);
});

test("every local OpenAPI reference resolves", () => {
  function walk(value) {
    if (!value || typeof value !== "object") return;
    if (value.$ref) {
      assert.ok(value.$ref.startsWith("#/"));
      assert.notEqual(value.$ref.slice(2).split("/").reduce((node, key) => node?.[key], spec), undefined, value.$ref);
    }
    Object.values(value).forEach(walk);
  }
  walk(spec);
});

test("document generation is deterministic", () => {
  assert.deepEqual(buildOpenApiDocument(), spec);
  assert.equal(AUTHORED_PAGES["/developers"](), developer);
  assert.equal(buildLlmsFullTxt(pages), full);
});
