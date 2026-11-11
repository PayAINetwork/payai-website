const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { issueNumber, logoUrl, parseIssue, imageType, downloadLogo, assertMaintainer, publish, MAX_IMAGE_BYTES } = require('./ecosystem-submission.cjs');

const imageUrl = 'https://github.com/user-attachments/assets/12345678-1234-1234-1234-123456789abc';
const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aN3sAAAAASUVORK5CYII=', 'base64');
function body(logo = imageUrl) {
  return `### Project Name\n\nExample Project\n\n### Project Logo\n\n<img src="${logo}">\n\n### Website URL\n\nhttps://example.com\n\n### Twitter/X URL\n\nhttps://x.com/example\n\n### Category\n\nAI Agents\n\n### One-line Summary\n\nA useful service\n\n### Networks You Settle On Through PayAI\n\nSolana, Base\n\n### How You Use PayAI\n\nA service that uses PayAI for payment settlement.\n\n### Where Your Site Says You Use PayAI\n\nhttps://example.com/payments\n\n### Testimonial (optional)\n\n_No response_\n`;
}

test('accepts GitHub-uploaded logos and projects only known fields', () => {
  const parsed = parseIssue(body() + '\n### __proto__\n\nmalicious\n', 12);
  assert.equal(parsed.entry.name, 'Example Project');
  assert.equal(parsed.imageUrl, imageUrl);
  assert.deepEqual(parsed.entry.networks, ['Solana', 'Base']);
  assert.equal(parsed.entry.testimonial, undefined);
  assert.equal(Object.getPrototypeOf(parsed.entry), Object.prototype);
  assert.equal(imageType(png), 'png');
});

test('rejects the actual local-environment-file exploit before making any request', async () => {
  let requests = 0;
  await assert.rejects(downloadLogo('file:///proc/self/environ', async () => { requests++; }), /HTTPS/);
  assert.throws(() => parseIssue(body('file:///proc/self/environ'), 155), /HTTPS/);
  assert.equal(requests, 0);
});

test('rejects alternate schemes, credentials, deceptive hosts, ports and local networks', () => {
  for (const input of [
    'http://github.com/user-attachments/assets/12345678-1234-1234-1234-123456789abc',
    'https://github.com.evil.example/image.png',
    'https://github.com@evil.example/image.png',
    'https://user:password@github.com/user-attachments/assets/12345678-1234-1234-1234-123456789abc',
    'https://127.0.0.1/image.png', 'https://[::1]/image.png', 'https://169.254.169.254/latest/meta-data/',
    'https://github.com:8443/image.png', 'https://github.com/payai.png',
    'data:image/png;base64,AAAA', '-K /proc/self/environ',
  ]) assert.throws(() => logoUrl(input), undefined, input);
});

test('validates every redirect and never requests a disallowed destination', async () => {
  for (const location of ['file:///proc/self/environ', 'http://169.254.169.254/', 'https://evil.example/image.png']) {
    let calls = 0;
    await assert.rejects(downloadLogo(imageUrl, async () => { calls++; return { status: 302, headers: { location }, bytes: Buffer.alloc(0) }; }));
    assert.equal(calls, 1);
  }
  let calls = 0;
  const result = await downloadLogo(imageUrl, async url => {
    calls++;
    if (calls === 1) return { status: 302, headers: { location: 'https://github-production-user-asset-6210df.s3.amazonaws.com/image.png?signature=test' }, bytes: Buffer.alloc(0) };
    assert.equal(url.protocol, 'https:');
    return { status: 200, headers: { 'content-type': 'image/png' }, bytes: png };
  });
  assert.deepEqual(result, png);
  assert.equal(calls, 2);
});

test('rejects redirect loops, failed responses, false image MIME types and oversized bodies', async () => {
  let calls = 0;
  await assert.rejects(downloadLogo(imageUrl, async () => { calls++; return { status: 302, headers: { location: imageUrl } }; }), /redirects/);
  assert.equal(calls, 4);
  for (const response of [
    { status: 403, headers: {}, bytes: png },
    { status: 200, headers: { 'content-type': 'text/html' }, bytes: png },
    { status: 200, headers: { 'content-type': 'image/png' }, bytes: Buffer.from('INPUT_GITHUB-TOKEN=not-an-image\0ACTIONS_RUNTIME_TOKEN=value') },
    { status: 200, headers: { 'content-type': 'image/svg+xml' }, bytes: Buffer.from('<svg onload="alert(1)"></svg>') },
    { status: 200, headers: { 'content-type': 'image/png' }, bytes: Buffer.alloc(MAX_IMAGE_BYTES + 1) },
  ]) await assert.rejects(downloadLogo(imageUrl, async () => response));
});

test('rejects malformed issue IDs, duplicate fields, script links and oversized issue data', () => {
  for (const number of ['../main', '1\n2', '-1', '1.2', '01', '1;curl x', 0]) assert.throws(() => issueNumber(number));
  assert.throws(() => parseIssue(body() + '\n### Project Name\n\nAnother', 12), /Duplicate/);
  assert.throws(() => parseIssue(body().replace('https://example.com', 'javascript:alert(1)'), 12), /Invalid/);
  assert.throws(() => parseIssue('x'.repeat(50_001), 12), /Invalid issue body/);
});

function mocks(issueBody = body()) {
  const writes = [];
  const context = { eventName: 'workflow_dispatch', ref: 'refs/heads/main', actor: 'maintainer', repo: { owner: 'PayAINetwork', repo: 'payai-website' }, payload: { inputs: { issue_number: '12' } } };
  const record = (method, data) => async args => { writes.push({ method, args }); return { data }; };
  const github = { rest: {
    issues: { get: async () => ({ data: { state: 'open', body: issueBody } }) },
    repos: {
      getCollaboratorPermissionLevel: async () => ({ data: { permission: 'write' } }),
      getContent: async () => ({ data: { type: 'file', encoding: 'base64', content: Buffer.from('[]').toString('base64') } }),
    },
    git: {
      getRef: async ({ ref }) => { if (ref !== 'heads/main') throw Object.assign(new Error('not found'), { status: 404 }); return { data: { object: { sha: 'base-commit' } } }; },
      getCommit: async () => ({ data: { tree: { sha: 'base-tree' } } }),
      createBlob: record('blob', { sha: 'blob' }), createTree: record('tree', { sha: 'tree' }),
      createCommit: record('commit', { sha: 'commit' }), createRef: record('ref', {}),
    },
    pulls: { create: record('pr', { html_url: 'https://github.com/PayAINetwork/payai-website/pull/1' }) },
  } };
  return { github, context, core: { info() {} }, writes };
}

test('requires a maintainer dispatch on main before privileged work', async () => {
  const m = mocks();
  await assert.rejects(assertMaintainer(m.github, { ...m.context, eventName: 'issues' }), /manually/);
  await assert.rejects(assertMaintainer(m.github, { ...m.context, ref: 'refs/heads/attacker' }), /main/);
  m.github.rest.repos.getCollaboratorPermissionLevel = async () => ({ data: { permission: 'read' } });
  await assert.rejects(assertMaintainer(m.github, m.context), /maintainer/);
  assert.deepEqual(m.writes, []);
});

async function artifact(t, content = body(), image = png) {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'ecosystem-test-'));
  t.after(() => fs.rm(directory, { recursive: true, force: true }));
  await fs.writeFile(path.join(directory, 'submission.json'), JSON.stringify({ number: 12, body: content }));
  await fs.writeFile(path.join(directory, 'logo.bin'), image);
  return directory;
}

test('publisher creates exactly two data files on a new PR branch and never updates main', async t => {
  const m = mocks(), directory = await artifact(t);
  await publish({ ...m, directory });
  const tree = m.writes.find(w => w.method === 'tree').args;
  assert.equal(tree.base_tree, 'base-tree');
  assert.deepEqual(tree.tree.map(n => n.path), ['public/projects/submission-12.png', 'src/data/projects.json']);
  assert.equal(m.writes.find(w => w.method === 'ref').args.ref, 'refs/heads/ecosystem/submission-12');
  const pr = m.writes.find(w => w.method === 'pr').args;
  assert.equal(pr.base, 'main');
  assert.equal(pr.draft, true);
  assert.match(pr.body, /^## Summary\n/);
});

test('publisher refuses changed issues, environment dumps, symlinks and existing branches before writes', async t => {
  for (const scenario of ['changed', 'dump', 'symlink', 'existing']) {
    const m = mocks(), directory = await artifact(t, body(), scenario === 'dump' ? Buffer.from('INPUT_GITHUB-TOKEN=secret\0'.repeat(10)) : png);
    if (scenario === 'changed') m.github.rest.issues.get = async () => ({ data: { state: 'open', body: body().replace('Example Project', 'Changed') } });
    if (scenario === 'symlink') {
      await fs.unlink(path.join(directory, 'logo.bin'));
      await fs.symlink(path.join(directory, 'submission.json'), path.join(directory, 'logo.bin'));
    }
    if (scenario === 'existing') m.github.rest.git.getRef = async () => ({ data: { object: { sha: 'existing' } } });
    await assert.rejects(publish({ ...m, directory }));
    assert.deepEqual(m.writes, [], scenario);
  }
});
