import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
})
  