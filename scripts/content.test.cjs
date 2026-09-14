const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { createRequire } = require("node:module");
const { resolve } = require("node:path");
const { test } = require("node:test");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const ts = require("typescript");

const filename = resolve(__dirname, "../src/components/content/Markdown.jsx");
const compiled = ts.transpileModule(readFileSync(filename, "utf8"), {
  fileName: filename,
  compilerOptions: { jsx: ts.JsxEmit.React, module: ts.ModuleKind.CommonJS, esModuleInterop: true },
}).outputText;
const loaded = { exports: {} };
new Function("require", "module", "exports", compiled)(createRequire(filename), loaded, loaded.exports);
const { Markdown } = loaded.exports;
const render = (markdown) => renderToStaticMarkup(React.createElement(Markdown, { markdown }));

test("a sentence-ending period stays outside a security email link", () => {
  const html = render("Report a vulnerability privately to info@payai.network.");
  assert.match(html, /href="mailto:info@payai.network"/);
  assert.match(html, />info@payai.network<\/a>\.<\/p>/);
  assert.doesNotMatch(html, /mailto:info@payai.network\./);
});

test("bare email domains retain subdomains, hyphens and plus addressing", () => {
  for (const email of ["legal@payai.network", "support+security@sub.example-site.co.uk"]) {
    for (const punctuation of ["", ".", ",", ";", ":", "!", "?"]) {
      const html = render(`Email ${email}${punctuation}`);
      assert.ok(html.includes(`href="mailto:${email}"`));
      assert.ok(html.includes(`>${email}</a>${punctuation}</p>`));
    }
  }
});

test("code and explicit Markdown email links keep their existing behavior", () => {
  assert.doesNotMatch(render("`info@payai.network.`"), /mailto:/);
  const html = render("[Security](mailto:info@payai.network). https://payai.network/contact.");
  assert.match(html, /href="mailto:info@payai.network"/);
  assert.match(html, />Security<\/a>\./);
  assert.match(html, /href="https:\/\/payai.network\/contact"/);
});

test("payment reason codes keep intraword underscores without italicizing intervening text", () => {
  const html = render("settlement_pending is unresolved; duplicate_settlement can be a replay marker. PAYAI_API_KEY_ID remains literal.");
  assert.match(html, /settlement_pending/);
  assert.match(html, /duplicate_settlement/);
  assert.match(html, /PAYAI_API_KEY_ID/);
  assert.doesNotMatch(html, /<em>/);
});

test("standalone emphasis still works alongside identifiers, code and URLs", () => {
  const html = render("_a_ and (_several words_) with foo_bar_baz, `_code_` and https://example.com/foo_bar.");
  assert.match(html, /<em>a<\/em>/);
  assert.match(html, /<em>several words<\/em>/);
  assert.match(html, /foo_bar_baz/);
  assert.match(html, />_code_<\/code>/);
  assert.match(html, /href="https:\/\/example.com\/foo_bar"/);
});
