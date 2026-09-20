import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Destino: https://mcp.iamed.cc/anvisa
// site + base geram canonical e OG absolutos corretos e prefixam os assets.
export default defineConfig({
  site: "https://mcp.iamed.cc",
  base: "/anvisa",
  output: "static",
  integrations: [tailwind()],
});
