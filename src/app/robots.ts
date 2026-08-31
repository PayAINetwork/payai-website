import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Explicitly welcomes AI crawlers and agent user-agents.
 *
 * A bare `User-agent: *` already allows them, but several crawlers only look
 * for a rule that names them, and the explicit list documents the intent: this
 * site is meant to be read by agents.
 */
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "GoogleOther",
  "Applebot-Extended",
  "meta-externalagent",
  "Bytespider",
  "cohere-ai",
  "DuckAssistBot",
  "MistralAI-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/mts/",
      },
      ...AI_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: "/mts/",
      })),
    ],
    sitemap: `${SITE_URL}/sitemap_index.xml`,
    host: SITE_URL,
  };
}
