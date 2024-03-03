import * as daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#D7263D",
          "secondary": "#FFF94F",
          "accent": "#9d5800",
          "neutral": "#313B42",
          "base-100": "#0D1821",
          "info": "#00b5db",
          "success": "#78a600",
          "warning": "#FFF94F",
          "error": "#d70000",
        },
      },
    ],
  },
  plugins: [daisyui],
}

