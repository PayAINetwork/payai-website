import { SITE_URL, INFO_EMAIL } from "@/lib/site";

/**
 * RFC 9116 security.txt, served at /.well-known/security.txt via a rewrite in
 * next.config.ts. The contact page points researchers here, so the machine
 * readable version should exist too.
 */
export const dynamic = "force-static";
export const revalidate = 3600;

/** RFC 9116 requires an expiry; roll it forward a year from build time. */
function expires(): string {
  const date = new Date();
  date.setUTCFullYear(date.getUTCFullYear() + 1);
  date.setUTCMilliseconds(0);
  return date.toISOString().replace(".000", "");
}

export function GET() {
  const body = [
    `Contact: mailto:${INFO_EMAIL}`,
    `Expires: ${expires()}`,
    "Preferred-Languages: en",
    `Canonical: ${SITE_URL}/.well-known/security.txt`,
    `Policy: ${SITE_URL}/terms-of-service`,
    "",
    "# Report vulnerabilities privately. Please do not open a public issue.",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
