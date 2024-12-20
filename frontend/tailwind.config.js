/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      animation:{
        "spin-slow":"spin 3s linear infinite"
      }
    },
  },
  plugins: [],
}

