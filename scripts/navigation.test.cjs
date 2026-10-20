const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { createRequire } = require("node:module");
const { resolve } = require("node:path");
const { test } = require("node:test");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const ts = require("typescript");

// Compile the actual JSX with the project's existing TypeScript dependency.
// SSR does not execute effects or make the navbar's browser-side stats request.
// "@/..." imports resolve into src/ the same way the Next.js path alias does.
const root = resolve(__dirname, "../src");
const cache = new Map();
function load(filename) {
  if (cache.has(filename)) return cache.get(filename).exports;
  const module = { exports: {} };
  cache.set(filename, module);
  const compiled = ts.transpileModule(readFileSync(filename, "utf8"), {
    fileName: filename,
    compilerOptions: {
      jsx: ts.JsxEmit.React,
      module: ts.ModuleKind.CommonJS,
      esModuleInterop: true,
    },
  }).outputText;
  const localRequire = (id) => id.startsWith("@/")
    ? load(resolve(root, id.slice(2) + ".ts"))
    : createRequire(filename)(id);
  new Function("require", "module", "exports", compiled)(localRequire, module, module.exports);
  return module.exports;
}
const filename = resolve(root, "components/layout/Navbar.jsx");
const source = readFileSync(filename, "utf8");
const { Navbar } = load(filename);
const site = load(resolve(root, "lib/site.ts"));

function homeLinks(props) {
  const html = renderToStaticMarkup(React.createElement(Navbar, props));
  return [...html.matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)]
    .filter((match) => match[2].replace(/<[^>]+>/g, "").trim() === "Home")
    .map((match) => match[1]);
}

test("an unspecified page navigates Home instead of scrolling a missing section", () => {
  assert.deepEqual(homeLinks({}), ["/"]);
});

test("the collapsed mobile menu has an accessible name and state", () => {
  const html = renderToStaticMarkup(React.createElement(Navbar, {}));
  assert.match(html, /<button[^>]*type="button"[^>]*aria-label="Open navigation menu"[^>]*aria-expanded="false"/);
  assert.match(source, /aria-label=\{isMobileMenuOpen \? "Close navigation menu" : "Open navigation menu"\}/);
  assert.match(source, /aria-expanded=\{isMobileMenuOpen\}/);
});

test("the explicit homepage retains its section link", () => {
  assert.deepEqual(homeLinks({ activePage: "home" }), ["#home"]);
  const page = readFileSync(resolve(__dirname, "../src/app/page.jsx"), "utf8");
  assert.match(page, /<Navbar\s+activePage="home"\s*\/>/);
});

test("the ecosystem page still navigates to the homepage", () => {
  assert.deepEqual(homeLinks({ activePage: "projects" }), ["/"]);
});

test("desktop and conditional mobile links share the same page-aware destination", () => {
  const tree = ts.createSourceFile(filename, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JSX);
  const destinations = [];
  function walk(node) {
    if (ts.isJsxAttribute(node) && node.name.getText(tree) === "href" &&
        node.initializer?.getText(tree).includes('"#home"')) {
      destinations.push(node.initializer.getText(tree));
    }
    ts.forEachChild(node, walk);
  }
  walk(tree);
  assert.deepEqual(destinations, [
    '{activePage === "home" ? "#home" : "/"}',
    '{activePage === "home" ? "#home" : "/"}',
  ]);
});


function anchors(html) {
  return [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].map(([, attrs, body]) => ({
    href: attrs.match(/href="([^"]*)"/)?.[1],
    target: attrs.match(/target="([^"]*)"/)?.[1],
    text: body.replace(/<[^>]+>/g, "").trim(),
  }));
}

test("the navbar offers Pricing, Sign in and a same-tab Start free sign-up", () => {
  assert.equal(site.MERCHANT_SIGNUP_URL, "https://merchant.payai.network/?signup=1");
  assert.equal(site.PRICING_URL, "https://facilitator.payai.network/pricing");
  const links = anchors(renderToStaticMarkup(React.createElement(Navbar, { activePage: "home" })));
  const byText = (text) => links.filter((link) => link.text === text);
  assert.deepEqual(byText("Pricing"), [{ href: site.PRICING_URL, target: undefined, text: "Pricing" }]);
  assert.deepEqual(byText("Sign in"), [{ href: site.MERCHANT_PORTAL_URL, target: undefined, text: "Sign in" }]);
  assert.deepEqual(byText("Start free"), [{ href: site.MERCHANT_SIGNUP_URL, target: undefined, text: "Start free" }]);
  assert.equal(byText("Get Started").length, 0);
  assert.ok(!links.some((link) => link.href === site.FACILITATOR_URL), "no CTA sends sign-ups to the facilitator landing page");
});

test("the mobile menu repeats Pricing, Sign in and Start free", () => {
  // The menu only mounts when opened, so check the source it renders from.
  const tree = ts.createSourceFile(filename, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JSX);
  const hrefs = [];
  function walk(node) {
    if (ts.isJsxAttribute(node) && node.name.getText(tree) === "href") hrefs.push(node.initializer.getText(tree));
    ts.forEachChild(node, walk);
  }
  walk(tree);
  const count = (expr) => hrefs.filter((href) => href === expr).length;
  assert.equal(count("{PRICING_URL}"), 2);
  assert.equal(count("{MERCHANT_PORTAL_URL}"), 2);
  assert.equal(count("{MERCHANT_SIGNUP_URL}"), 2);
  assert.doesNotMatch(source, /NEXT_PUBLIC_FACILITATOR_URL/);
});

test("hero, product card and closing CTA send Start free to portal sign-up in the same tab", () => {
  for (const name of ["Header", "CTA", "Overview"]) {
    const file = resolve(root, `components/sections/${name}.jsx`);
    const text = readFileSync(file, "utf8");
    assert.doesNotMatch(text, /NEXT_PUBLIC_FACILITATOR_URL/, name);
    assert.match(text, /MERCHANT_SIGNUP_URL/, name);
    assert.match(text, /Start free/, name);
  }
  for (const name of ["Header", "CTA"]) {
    const text = readFileSync(resolve(root, `components/sections/${name}.jsx`), "utf8");
    const signup = text.match(/<Link\b[^>]*href=\{MERCHANT_SIGNUP_URL\}[^>]*>/)?.[0];
    assert.ok(signup, name);
    assert.doesNotMatch(signup, /target=/, name);
    assert.match(text, /href=\{DOCS_QUICKSTART_URL\}/, name);
    assert.match(text, /Read the docs/, name);
    assert.match(text, /href=\{process\.env\.NEXT_PUBLIC_ECHO_MERCHANT_URL \|\| "#"\}/, name);
    assert.match(text, /Try x402/, name);
  }
  const overview = readFileSync(resolve(root, "components/sections/Overview.jsx"), "utf8");
  assert.match(overview, /url: MERCHANT_SIGNUP_URL,\s*ctaLabel: "Start free",[\s\S]*?sameTab: true/);
  assert.match(overview, /url: process\.env\.NEXT_PUBLIC_ECHO_MERCHANT_URL/);
});
