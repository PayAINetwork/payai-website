/**
 * Renders a JSON-LD <script> tag for SEO structured data.
 * Accepts a plain JS object (or array of objects) and serializes it.
 *
 * Usage:
 *   <JsonLd data={{ "@context": "https://schema.org", "@type": "Organization", ... }} />
 */
export function JsonLd({ data, id }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      {...(id ? { id } : {})}
    />
  );
}
