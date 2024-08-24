import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import codeMdxTheme from "./src/styles/OneDark-Pro-darker.json"

// Change background color for the code Mdx theme
const theme = {
  ...codeMdxTheme,
  colors: {
    ...codeMdxTheme.colors,
    "editor.background": "#2e2e2e"
  }
}

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  base:"./",
  // Change background color for the code Mdx theme
  markdown: {
    shikiConfig: {
      theme
    },
  },
})