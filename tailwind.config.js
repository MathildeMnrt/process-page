/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-purple": "#6B59D0",
        "theme-grey-1": "#DEDDEB",
        "theme-grey-2": "#6B7280",
        "theme-grey-3": "#374151",
      },
      backgroundImage: {
        hero: "url('./assets/process-page-bg.png')"
      },
    },
    plugins: [],
  }
}
