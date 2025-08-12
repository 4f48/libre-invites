import { defineConfig, presetWind4 } from "unocss";

export default defineConfig({
  presets: [presetWind4()],
  theme: {
    font: {
      sans: "var(--font-roboto)",
    },
  },
});
