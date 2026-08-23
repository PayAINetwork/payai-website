import React from "react";

/**
 * Renders the restricted Markdown subset used by the authored agent pages
 * (src/lib/agent/pages.ts) so the human page and the `Accept: text/markdown`
 * representation are generated from one source and cannot drift.
 *
 * Supports: ATX headings, paragraphs, unordered lists, fenced code blocks,
 * inline code, bold, italics, and links. Anything else renders as plain text.
 */

/*
 * Bare URLs and email addresses are linkified too: the authored Markdown
 * writes contact details as plain text, and a contact page whose addresses are
 * not clickable is a worse page than the Markdown it came from.
 */
const INLINE =
  /(\[[^\]]+\]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*|_[^_]+_|https?:\/\/[^\s<>()]+[^\s<>().,;:]|[\w.+-]+@[\w-]+\.[\w.]+)/g;

function renderInline(text, keyPrefix) {
  return text.split(INLINE).filter(Boolean).map((token, index) => {
    const key = `${keyPrefix}-${index}`;

    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const external = href.startsWith("http") && !href.includes("payai.network");
      return (
        <a
          key={key}
          href={href}
          className="text-midnight underline underline-offset-2 hover:opacity-70"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {label}
        </a>
      );
    }
    if (token.startsWith("`") && token.endsWith("`")) {
      return (
        <code
          key={key}
          className="rounded bg-[#F4F4F5] px-1.5 py-0.5 font-mono text-[0.9em] text-midnight"
        >
          {token.slice(1, -1)}
        </code>
      );
    }
    if (token.startsWith("**") && token.endsWith("**")) {
      return (
        <strong key={key} className="font-semibold text-midnight">
          {token.slice(2, -2)}
        </strong>
      );
    }
    if (token.startsWith("_") && token.endsWith("_")) {
      return <em key={key}>{token.slice(1, -1)}</em>;
    }
    if (/^https?:\/\//.test(token)) {
      const external = !token.includes("payai.network");
      return (
        <a
          key={key}
          href={token}
          className="text-midnight underline underline-offset-2 hover:opacity-70 break-words"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {token}
        </a>
      );
    }
    if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(token)) {
      return (
        <a
          key={key}
          href={`mailto:${token}`}
          className="text-midnight underline underline-offset-2 hover:opacity-70"
        >
          {token}
        </a>
      );
    }
    return <React.Fragment key={key}>{token}</React.Fragment>;
  });
}

/**
 * Splits the document into blocks, keeping fenced code intact.
 * `headingOffset` demotes headings, so a page whose <h1> is rendered by the
 * layout can pass 1 and keep a valid heading hierarchy.
 */
function toBlocks(markdown) {
  const lines = markdown.split("\n");
  const blocks = [];
  let paragraph = [];
  let list = [];
  let fence = null;

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ kind: "p", text: paragraph.join(" ") });
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      blocks.push({ kind: "ul", items: list });
      list = [];
    }
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (fence === null) {
        flushParagraph();
        flushList();
        fence = [];
      } else {
        blocks.push({ kind: "code", text: fence.join("\n") });
        fence = null;
      }
      continue;
    }
    if (fence !== null) {
      fence.push(line);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      flushList();
      blocks.push({ kind: "h", level: heading[1].length, text: heading[2] });
      continue;
    }

    const item = line.match(/^[-*]\s+(.*)$/);
    if (item) {
      flushParagraph();
      list.push(item[1]);
      continue;
    }

    // Continuation line of the previous list item.
    if (list.length && /^\s{2,}\S/.test(line)) {
      list[list.length - 1] += ` ${line.trim()}`;
      continue;
    }

    if (line.trim() === "") {
      flushParagraph();
      flushList();
      continue;
    }

    flushList();
    paragraph.push(line.trim());
  }

  flushParagraph();
  flushList();
  return blocks;
}

const HEADING_CLASS = {
  1: "text-heading md:text-display font-semibold text-midnight mb-6",
  2: "text-subheading md:text-heading font-semibold text-midnight mt-12 mb-4",
  3: "text-body-lg font-semibold text-midnight mt-8 mb-3",
  4: "text-body font-semibold text-midnight mt-6 mb-2",
};

export function Markdown({ markdown, headingOffset = 0, skipFirstHeading = false }) {
  let blocks = toBlocks(markdown);

  if (skipFirstHeading) {
    const first = blocks.findIndex((b) => b.kind === "h");
    if (first !== -1) blocks = blocks.filter((_, i) => i !== first);
  }

  return (
    <div className="max-w-3xl">
      {blocks.map((block, index) => {
        const key = `b${index}`;

        if (block.kind === "h") {
          const level = Math.min(6, block.level + headingOffset);
          const Tag = `h${level}`;
          return (
            <Tag key={key} className={HEADING_CLASS[level] ?? HEADING_CLASS[4]}>
              {renderInline(block.text, key)}
            </Tag>
          );
        }
        if (block.kind === "ul") {
          return (
            <ul key={key} className="list-disc pl-6 space-y-2 mb-4">
              {block.items.map((item, i) => (
                <li key={`${key}-${i}`} className="text-body text-gray-600 leading-relaxed">
                  {renderInline(item, `${key}-${i}`)}
                </li>
              ))}
            </ul>
          );
        }
        if (block.kind === "code") {
          return (
            <pre
              key={key}
              className="mb-4 overflow-x-auto rounded-lg bg-[#F4F4F5] p-4 font-mono text-sm text-midnight"
            >
              <code>{block.text}</code>
            </pre>
          );
        }
        return (
          <p key={key} className="text-body md:text-body-lg text-gray-600 leading-relaxed mb-4">
            {renderInline(block.text, key)}
          </p>
        );
      })}
    </div>
  );
}
