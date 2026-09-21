import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Destino: https://mcp.iamed.cc/radar-cfm
export default defineConfig({
  site: "https://mcp.iamed.cc",
  base: "/radar-cfm",
  output: "static",
  integrations: [tailwind()],
});
