/**
 * Minimal HTML-to-Markdown conversion for pages whose Markdown representation
 * is derived rather than authored (the legal pages).
 *
 * Deliberately small: it handles the tag vocabulary those pages actually use —
 * headings, paragraphs, lists, links, emphasis — and drops everything else.
 * It is not a general-purpose converter, and it is not used for any page whose
 * Markdown is authored by hand in ./pages.ts.
 */

function decodeEntities(value: string): string {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&amp;/g, "&");
}

function stripTags(value: string): string {
  return decodeEntities(value.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
}

/**
 * Extracts the readable body of a rendered page and renders its headings,
 * paragraphs, and lists as Markdown.
 */
export function htmlToMarkdown(html: string): string {
  let doc = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "")
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, "")
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, "")
    .replace(/<nav\b[\s\S]*?<\/nav>/gi, "")
    .replace(/<footer\b[\s\S]*?<\/footer>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "");

  const body = doc.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (body) doc = body[1];

  // Inline formatting first, so block extraction sees plain text.
  doc = doc
    .replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, inner) => {
      const text = stripTags(inner);
      return text ? `**${text}**` : "";
    })
    .replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, inner) => {
      const text = stripTags(inner);
      return text ? `_${text}_` : "";
    })
    .replace(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, inner) => {
      const text = stripTags(inner);
      if (!text) return "";
      return href.startsWith("#") ? text : `[${text}](${href})`;
    })
    .replace(/<br\s*\/?>/gi, "\n");

  const blocks: string[] = [];
  const pattern =
    /<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>|<li\b[^>]*>([\s\S]*?)<\/li>|<p\b[^>]*>([\s\S]*?)<\/p>/gi;

  let match: RegExpExecArray | null;
  while ((match = pattern.exec(doc)) !== null) {
    const [, headingTag, headingInner, listInner, paraInner] = match;

    if (headingTag) {
      const text = stripTags(headingInner);
      if (text) blocks.push(`${"#".repeat(Number(headingTag[1]))} ${text}`);
      continue;
    }
    if (listInner !== undefined) {
      const text = stripTags(listInner);
      if (text) blocks.push(`- ${text}`);
      continue;
    }
    const text = stripTags(paraInner ?? "");
    if (text) blocks.push(text);
  }

  // Collapse runs of list items so they render as a single list.
  const out: string[] = [];
  for (const block of blocks) {
    const previous = out[out.length - 1];
    if (block.startsWith("- ") && previous?.startsWith("- ")) {
      out[out.length - 1] = `${previous}\n${block}`;
      continue;
    }
    out.push(block);
  }

  return out.join("\n\n").replace(/\n{3,}/g, "\n\n").trim();
}
