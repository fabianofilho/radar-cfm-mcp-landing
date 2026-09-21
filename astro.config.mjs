import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Destino: https://iamed.cc/mcps/radar-cfm
export default defineConfig({
  site: "https://iamed.cc",
  base: "/mcps/radar-cfm",
  output: "static",
  integrations: [tailwind()],
});
