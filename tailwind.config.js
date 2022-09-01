/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0B1322",
          "secondary": "#06A877",
          "accent": "#0d1324",
          "neutral": "#d6d3d1",
          "base-100": "#ffffff",
          "info": "#111827",
          "success": "#15803d",
          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}