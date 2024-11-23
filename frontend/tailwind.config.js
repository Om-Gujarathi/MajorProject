/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef3f7',
          100: '#d1e0e9',
          200: '#a3bed2',
          300: '#749bbb',
          400: '#4579a4',
          500: '#2563eb',
          600: '#204f71',
          700: '#193c56',
          800: '#12293c',
          900: '#0a1621',
        },
      },
    },
  },
  plugins: [],
}

