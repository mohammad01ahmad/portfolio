/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      spacing: {
        '4.5': '1.125rem',
        '15': '3.75rem',
      },
      scale: {
        '140': '1.4',
      },
    },
  },
  plugins: [],
}
