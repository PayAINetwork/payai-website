const fs = require('node:fs/promises');
const path = require('node:path');
const https = require('node:https');

const MAX_IMAGE_BYTES = 2 * 1024 * 1024;
const MAX_BODY_BYTES = 50_000;
const CATEGORIES = ['AI Agents', 'Analytics', 'Blockchain', 'DeFi', 'Gaming', 'Infrastructure', 'Payments', 'SaaS', 'Trading'];
const NETWORKS = ['Solana', 'Base', 'BNB Smart Chain', 'Polygon', 'Avalanche', 'Arbitrum', 'Sei', 'X Layer', 'SKALE Base'];

function issueNumber(value) {
  if (!/^[1-9]\d{0,8}$/.test(String(value))) throw new Error('A valid issue number is required');
  return Number(value);
}

function text(value, label, max, required = false) {
  if (typeof value !== 'string' || value.length > max || /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(value)) {
    throw new Error(`Invalid ${label}`);
  }
  const result = value.trim();
  if (required && !result) throw new Error(`Missing ${label}`);
  return result;
}

function link(value, label, required = false) {
  if (!value && !required) return '';
  const input = text(value, label, 2048, true);
  const url = new URL(input);
  if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || /\s/.test(input)) {
    throw new Error(`Invalid ${label}`);
  }
  return url.href;
}

function logoUrl(value, redirect = false) {
  const url = new URL(value);
  if (url.protocol !== 'https:' || url.username || url.password || url.port || url.hash) {
    throw new Error('Logo must be an HTTPS GitHub image upload');
  }
  const attachment = url.hostname === 'github.com' && /^\/user-attachments\/assets\/[a-f0-9-]{36}$/i.test(url.pathname);
  const legacy = url.hostname === 'user-images.githubusercontent.com' && /^\/\d+\//.test(url.pathname);
  const cdn = redirect && [
    'private-user-images.githubusercontent.com',
    'github-production-user-asset-6210df.s3.amazonaws.com',
    'github-production-user-asset-6210df.s3.us-east-1.amazonaws.com',
    'github-production-user-asset-6210df.s3.us-east-2.amazonaws.com',
    'github-production-user-asset-6210df.s3.us-west-2.amazonaws.com',
  ].includes(url.hostname);
  if (!attachment && !legacy && !cdn) throw new Error('Upload the logo to this GitHub issue; external image hosts are not accepted');
  return url;
}

function parseIssue(body, number) {
  number = issueNumber(number);
  if (typeof body !== 'string' || Buffer.byteLength(body) > MAX_BODY_BYTES) throw new Error('Invalid issue body');
  const fields = new Map();
  for (const match of body.matchAll(/^### ([^\r\n]+)\r?\n\s*\r?\n([\s\S]*?)(?=^### |$(?![\s\S]))/gm)) {
    if (fields.has(match[1])) throw new Error(`Duplicate field: ${match[1]}`);
    fields.set(match[1], match[2].trim());
  }
  const get = (name) => ['_No response_', 'None'].includes(fields.get(name)) ? '' : (fields.get(name) || '');
  const name = text(get('Project Name'), 'project name', 80, true);
  if (/[\r\n<>]/.test(name)) throw new Error('Project name must be one line');
  const rawLogo = get('Project Logo');
  const candidate = rawLogo.match(/<img[^>]*\bsrc=["']([^"']+)["']/i)?.[1]
    || rawLogo.match(/!\[[^\]]*\]\(([^)]+)\)/)?.[1] || rawLogo.trim();
  const imageUrl = logoUrl(candidate).href;
  const category = get('Category');
  if (!CATEGORIES.includes(category)) throw new Error('Invalid category');
  const entry = {
    name,
    description: text(get('How You Use PayAI') || get('Project Description'), 'description', 3000, true),
    websiteUrl: link(get('Website URL'), 'website URL', true),
    twitterUrl: link(get('Twitter/X URL'), 'Twitter/X URL'),
    category,
  };
  for (const [key, label, max] of [
    ['tagline', 'One-line Summary', 120],
    ['testimonial', 'Testimonial (optional)', 1500],
    ['testimonialAuthor', 'Testimonial Author (optional)', 120],
  ]) {
    const value = text(get(label), label, max);
    if (value) entry[key] = value;
  }
  const networks = get('Networks You Settle On Through PayAI').split(',').map(n => n.trim()).filter(Boolean);
  if (networks.some(n => !NETWORKS.includes(n))) throw new Error('Invalid network');
  if (networks.length) entry.networks = [...new Set(networks)];
  for (const [key, label] of [
    ['statementUrl', 'Where Your Site Says You Use PayAI'],
    ['storyUrl', 'Build Log, Case Study or Video (optional)'],
    ['codeUrl', 'Open-source Example or Package (optional)'],
  ]) {
    const value = link(get(label), label);
    if (value) entry[key] = value;
  }
  return { number, imageUrl, entry };
}

function imageType(bytes) {
  if (!Buffer.isBuffer(bytes) || bytes.length < 12 || bytes.length > MAX_IMAGE_BYTES) throw new Error('Invalid image size');
  if (bytes.subarray(0, 8).equals(Buffer.from('89504e470d0a1a0a', 'hex')) && bytes.length >= 45
      && bytes.readUInt32BE(8) === 13 && bytes.toString('ascii', 12, 16) === 'IHDR'
      && bytes.subarray(-8, -4).toString('ascii') === 'IEND') {
    const width = bytes.readUInt32BE(16), height = bytes.readUInt32BE(20);
    if (!width || !height || width > 4096 || height > 4096) throw new Error('PNG dimensions exceed the limit');
    return 'png';
  }
  if (bytes.subarray(0, 3).equals(Buffer.from('ffd8ff', 'hex')) && bytes.subarray(-2).equals(Buffer.from('ffd9', 'hex'))) return 'jpg';
  if (bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP'
      && bytes.readUInt32LE(4) === bytes.length - 8) return 'webp';
  throw new Error('Logo must contain PNG, JPEG or WebP image bytes; SVG and other files are not accepted');
}

// This transport has no authorization headers, shell, curl, local-file support,
// proxy/environment handling, or automatic redirects. Validate every hop above it.
function requestImage(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, { headers: { 'user-agent': 'PayAI-ecosystem-logo', accept: 'image/png,image/jpeg,image/webp' } }, response => {
      const chunks = [];
      let size = 0;
      response.on('data', chunk => {
        size += chunk.length;
        if (size > MAX_IMAGE_BYTES) request.destroy(new Error('Logo exceeds 2 MiB'));
        else chunks.push(chunk);
      });
      response.on('error', reject);
      response.on('end', () => resolve({ status: response.statusCode, headers: response.headers, bytes: Buffer.concat(chunks) }));
    });
    const deadline = setTimeout(() => request.destroy(new Error('Logo download timed out')), 10_000);
    request.on('close', () => clearTimeout(deadline));
    request.on('error', reject);
  });
}

async function downloadLogo(input, request = requestImage) {
  let url = logoUrl(input);
  for (let hop = 0; hop <= 3; hop++) {
    const response = await request(url);
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      if (!response.headers.location || hop === 3) throw new Error('Invalid or excessive image redirects');
      url = logoUrl(new URL(response.headers.location, url).href, true);
      continue;
    }
    if (response.status !== 200) throw new Error('GitHub image download failed');
    const type = imageType(response.bytes);
    const mime = String(response.headers['content-type'] || '').split(';')[0].trim().toLowerCase();
    if (mime !== ({ png: 'image/png', jpg: 'image/jpeg', webp: 'image/webp' })[type]) throw new Error('Image content type does not match its bytes');
    return response.bytes;
  }
}

async function assertMaintainer(github, context) {
  if (context.eventName !== 'workflow_dispatch' || context.ref !== 'refs/heads/main') {
    throw new Error('Run this workflow manually from main');
  }
  // Check both the original actor and the person re-running an existing run.
  const actors = new Set([context.actor, process.env.GITHUB_TRIGGERING_ACTOR || context.actor]);
  for (const username of actors) {
    const { data } = await github.rest.repos.getCollaboratorPermissionLevel({ ...context.repo, username });
    if (!['admin', 'maintain', 'write'].includes(data.permission)) throw new Error('Only a repository maintainer can prepare a submission');
  }
}

async function loadIssue(github, context) {
  const number = issueNumber(context.payload.inputs?.issue_number);
  const { data } = await github.rest.issues.get({ ...context.repo, issue_number: number });
  if (data.state !== 'open' || data.pull_request) throw new Error('Select an open submission issue');
  parseIssue(data.body, number);
  return { number, body: data.body };
}

async function prepare({ github, context, core, directory = path.join(process.env.RUNNER_TEMP, 'ecosystem-submission') }) {
  await assertMaintainer(github, context);
  const issue = await loadIssue(github, context);
  const { imageUrl } = parseIssue(issue.body, issue.number);
  const bytes = await downloadLogo(imageUrl);
  await fs.mkdir(directory, { recursive: true });
  await fs.writeFile(path.join(directory, 'submission.json'), JSON.stringify(issue));
  await fs.writeFile(path.join(directory, 'logo.bin'), bytes);
  core.info(`Prepared issue #${issue.number}; no repository changes made in the download job.`);
}

async function publish({ github, context, core, directory = path.join(process.env.RUNNER_TEMP, 'ecosystem-submission') }) {
  await assertMaintainer(github, context);
  const issue = await loadIssue(github, context);
  const manifestPath = path.join(directory, 'submission.json'), imagePath = path.join(directory, 'logo.bin');
  for (const [file, limit] of [[manifestPath, MAX_BODY_BYTES * 6], [imagePath, MAX_IMAGE_BYTES]]) {
    const stat = await fs.lstat(file);
    if (!stat.isFile() || stat.size > limit) throw new Error('Invalid prepared artifact');
  }
  const prepared = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  if (prepared.number !== issue.number || prepared.body !== issue.body) throw new Error('Issue changed after preparation; review it and start a new run');
  const { entry } = parseIssue(prepared.body, prepared.number);
  const image = await fs.readFile(imagePath);
  const filename = `public/projects/submission-${issue.number}.${imageType(image)}`;
  entry.logo = `/${filename.replace(/^public\//, '')}`;
  const repo = context.repo;
  const branch = `ecosystem/submission-${issue.number}`;
  try {
    await github.rest.git.getRef({ ...repo, ref: `heads/${branch}` });
    throw new Error('This issue already has a prepared branch; review it instead of overwriting it');
  } catch (error) { if (error.status !== 404) throw error; }
  const { data: base } = await github.rest.git.getRef({ ...repo, ref: 'heads/main' });
  const { data: source } = await github.rest.repos.getContent({ ...repo, path: 'src/data/projects.json', ref: base.object.sha });
  if (source.type !== 'file' || source.encoding !== 'base64') throw new Error('Invalid project data source');
  const projects = JSON.parse(Buffer.from(source.content, 'base64').toString('utf8'));
  if (!Array.isArray(projects)) throw new Error('Invalid projects.json');
  if (projects.some(p => p.name?.toLowerCase() === entry.name.toLowerCase())) throw new Error('Project is already listed');
  const { data: logo } = await github.rest.git.createBlob({ ...repo, content: image.toString('base64'), encoding: 'base64' });
  const { data: data } = await github.rest.git.createBlob({ ...repo, content: JSON.stringify([...projects, entry], null, 4) + '\n', encoding: 'utf-8' });
  const { data: baseCommit } = await github.rest.git.getCommit({ ...repo, commit_sha: base.object.sha });
  const { data: tree } = await github.rest.git.createTree({ ...repo, base_tree: baseCommit.tree.sha, tree: [
    { path: filename, mode: '100644', type: 'blob', sha: logo.sha },
    { path: 'src/data/projects.json', mode: '100644', type: 'blob', sha: data.sha },
  ] });
  const { data: commit } = await github.rest.git.createCommit({ ...repo, message: `feat: prepare ecosystem submission #${issue.number}`, tree: tree.sha, parents: [base.object.sha] });
  // Never update an existing ref, write main, or merge a PR from this workflow.
  await github.rest.git.createRef({ ...repo, ref: `refs/heads/${branch}`, sha: commit.sha });
  const { data: pr } = await github.rest.pulls.create({ ...repo, base: 'main', head: branch, draft: true,
    title: `Review ecosystem submission #${issue.number}`,
    body: `## Summary\n\nAdds the project listing proposed in #${issue.number} after a maintainer selected the submission for processing. The listing stays unpublished until this pull request is reviewed and merged.\n\n## Review\n\n- Verify the live PayAI integration and public statement in #${issue.number}.\n- Review the description, links and image.\n- Approve any pending workflow runs and require passing checks before merging.\n\nThe logo was fetched from GitHub in a read-only job and its format and size were checked again before committing. No applicant website was fetched.\n\nCloses #${issue.number}\n`,
  });
  core.info(`Draft pull request: ${pr.html_url}`);
}

module.exports = { issueNumber, logoUrl, parseIssue, imageType, downloadLogo, assertMaintainer, prepare, publish, MAX_IMAGE_BYTES };
