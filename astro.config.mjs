import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://letsboat.se",
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  i18n: {
    defaultLocale: "sv",
    locales: ["sv", "en", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
