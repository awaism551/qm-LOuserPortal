import { defineConfig } from '@tailwindcss/postcss'

export default defineConfig({
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
})
  