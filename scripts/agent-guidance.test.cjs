const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { createRequire } = require("node:module");
const { resolve } = require("node:path");
const { test } = require("node:test");
const { createHash } = require("node:crypto");
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

test("pricing, amount and discovery claims share qualified source guidance", () => {
  assert.equal(FAQ_DATA.find(x => x.question === "What does PayAI cost?").answer, guidance.PRICING_GUIDANCE);
  assert.equal(FAQ_DATA.find(x => x.question === "What is the minimum payment amount?").answer, guidance.AMOUNT_GUIDANCE);
  assert.equal(FAQ_DATA.find(x => x.question.startsWith("How do agents discover")).answer, guidance.DISCOVERY_GUIDANCE);
  for (const text of [AUTHORED_PAGES["/"](), developer, AUTHORED_PAGES["/ecosystem"](), buildLlmsTxt(), spec.paths["/discovery/resources"].get.description]) {
    assert.ok(text.includes(guidance.DISCOVERY_GUIDANCE));
  }
  for (const text of [AUTHORED_PAGES["/"](), AUTHORED_PAGES["/about"](), developer, buildLlmsTxt(), JSON.stringify(FAQ_DATA)]) {
    assert.doesNotMatch(text, /settle in under a second|Payments verify and settle in under a second|cheapest and fastest|Rates vary by network|\$0\.01 to \$1,000,000|everything payable right now|never holds merchant balances/);
  }
  assert.match(guidance.PRICING_GUIDANCE, /\$0\.001 per settlement/);
  assert.match(guidance.PRICING_GUIDANCE, /not a monthly reset/);
  assert.match(guidance.DISCOVERY_GUIDANCE, /not proof of current availability/);
});

test("first-party homepage sections do not reintroduce unsupported KPI or timing badges", () => {
  const files = ["Features", "Partners", "Overview", "Header", "Testimonials", "CTA", "Why", "HeroEcosystem"];
  for (const name of files) {
    const source = readFileSync(resolve(root, `components/sections/${name}.jsx`), "utf8");
    assert.doesNotMatch(source, /99\.9%|&lt; 1 Second|1000\+ companies|35M\+|250\+|<1s|Instant Settlement|Payments settle immediately|cheapest and fastest|\$0\.01 to \$1,000,000|100% of your test payment refunded/);
  }
  const features = readFileSync(resolve(root, "components/sections/Features.jsx"), "utf8");
  assert.match(features, /aria-label="Payment verification"/);
  assert.match(features, /aria-label="Payment settlement"/);
  const overview = readFileSync(resolve(root, "components/sections/Overview.jsx"), "utf8");
  assert.equal((overview.match(/isLive: false/g) ?? []).length, 2);
  assert.match(overview, /start on a testnet/i);
  const footer = readFileSync(resolve(root, "components/layout/Footer.jsx"), "utf8");
  assert.doesNotMatch(footer, /All systems normal|fetch\(|setInterval|<animate/);
  assert.match(footer, /Integration support/);
  const ecosystem = readFileSync(resolve(root, "components/sections/HeroEcosystem.jsx"), "utf8");
  assert.match(ecosystem, /\{projects.length\}/);
  assert.match(ecosystem, /Projects Listed/);
});

test("hero uses the visually reviewed illustration with its real dimensions and qualification", () => {
  // This ties the selected bytes to manual visual review; it is not OCR or a claim detector.
  const asset = readFileSync(resolve(root, "../public/header/hero-claims-reviewed.png"));
  assert.equal(asset.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
  assert.equal(asset.readUInt32BE(16), 1226);
  assert.equal(asset.readUInt32BE(20), 1283);
  assert.equal(createHash("sha256").update(asset).digest("hex"), "fc632ab3ea825c9c2a4ca88ee8b826ea7d62db4c74fd4055acc8337db314c33d");
  const source = readFileSync(resolve(root, "components/sections/Header.jsx"), "utf8");
  assert.match(source, /src="\/header\/hero-claims-reviewed\.png"/);
  assert.doesNotMatch(source, /src="\/header\/hero\.png"/);
  assert.match(source, /width=\{1226\}/);
  assert.match(source, /height=\{1283\}/);
  assert.match(source, /sizes="\(min-width: 1024px\) 600px, 100vw"/);
  assert.match(source, /Illustrative scenario, not a live booking interface\./);
  assert.equal(createHash("sha256").update(readFileSync(resolve(root, "../public/header/hero.png"))).digest("hex"), "118abba51e4a843b2963a4eb1cc9b740ff9891f684f1bad1d8e9b72684a374fc");
});
