import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://the-agentic-economy.vercel.app");

export default defineConfig({
  site: siteUrl,
  adapter: vercel(),
  image: {
    service: { entrypoint: "astro/assets/services/noop" },
  },
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
