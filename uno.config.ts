import { defineConfig, presetIcons, presetWind4 } from "unocss";

export default defineConfig({
  presets: [presetWind4(), presetIcons()],
  theme: {
    font: {
      sans: "var(--font-roboto)",
    },
  },
});
