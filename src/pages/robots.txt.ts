export function GET({ site }: { site: URL | undefined }) {
  const origin = site ?? new URL("https://the-agentic-economy.vercel.app");
  const sitemapUrl = new URL("/sitemap-index.xml", origin).toString();

  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
