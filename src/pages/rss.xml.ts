import type { APIRoute } from "astro";

const siteUrl = "https://the-agentic-economy.vercel.app";

const entries = [
  {
    order: 0,
    slug: "entry",
    title: "The Agentic Economy",
    description: "The world today vs the economy that is forming.",
  },
  {
    order: 1,
    slug: "actors-without-standing",
    title: "Actors Without Standing",
    description:
      "Identity, liability, and what it means to transact without legal existence.",
  },
  {
    order: 2,
    slug: "judgment-without-context",
    title: "Judgment Without Context",
    description:
      "Delegation, specification gaps, and why oversight is iterative alignment.",
  },
  {
    order: 3,
    slug: "scale-without-organization",
    title: "Scale Without Organization",
    description:
      "Coase, the headless firm, and who captures the surplus.",
  },
  {
    order: 4,
    slug: "risk-without-visibility",
    title: "Risk Without Visibility",
    description:
      "Correlation, propagation, speed, and the limits of intervention.",
  },
  {
    order: 5,
    slug: "the-hierarchy-unanchored",
    title: "The Hierarchy Unanchored",
    description:
      "Synthesis: capability growth without institutional anchoring.",
  },
];

export const GET: APIRoute = () => {
  const now = new Date().toUTCString();

  const items = entries
    .sort((a, b) => a.order - b.order)
    .map(
      (e) => `    <item>
      <title><![CDATA[${e.title}]]></title>
      <description><![CDATA[${e.description}]]></description>
      <link>${siteUrl}/${e.slug}</link>
      <guid isPermaLink="true">${siteUrl}/${e.slug}</guid>
      <pubDate>${now}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>The Agentic Economy</title>
    <description>A series on what happens when autonomous software agents become the primary actors in economic life.</description>
    <link>${siteUrl}</link>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
};
