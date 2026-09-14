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
const filename = resolve(__dirname, "../src/components/layout/Navbar.jsx");
const source = readFileSync(filename, "utf8");
const compiled = ts.transpileModule(source, {
  fileName: filename,
  compilerOptions: {
    jsx: ts.JsxEmit.React,
    module: ts.ModuleKind.CommonJS,
    esModuleInterop: true,
  },
}).outputText;
const loaded = { exports: {} };
new Function("require", "module", "exports", compiled)(
  createRequire(filename), loaded, loaded.exports,
);
const { Navbar } = loaded.exports;

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
