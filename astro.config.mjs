// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import unocss from "unocss/astro";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: "cloudflare",
  }),
  experimental: {
    fonts: [
      {
        cssVariable: "--font-roboto",
        name: "Roboto",
        provider: "local",
        variants: [
          {
            src: ["./src/assets/fonts/Roboto-VariableFont_wdth,wght.woff2"],
            style: "normal",
            weight: "100 900",
          },
          {
            src: [
              "./src/assets/fonts/Roboto-Italic-VariableFont_wdth,wght.woff2",
            ],
            style: "italic",
            weight: "100 900",
          },
        ],
      },
    ],
  },
  integrations: [unocss({ injectReset: true }), svelte()],
  output: "server",
});
