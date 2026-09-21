import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Destino: https://iamed.cc/mcps/anvisa
// site + base geram canonical e OG absolutos corretos e prefixam os assets.
export default defineConfig({
  site: "https://iamed.cc",
  base: "/mcps/anvisa",
  output: "static",
  integrations: [tailwind()],
});
