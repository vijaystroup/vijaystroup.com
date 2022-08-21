import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'

export default defineConfig({
  integrations: [tailwind({ config: { applyBaseStyles: false } }), preact()],
  site: 'https://vijaystroup.com',
  trailingSlash: 'never'
})
