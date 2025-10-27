/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          500: '#3b82f6',
          600: '#2563eb'
        }
      },
      boxShadow: {
        elevated: '0 20px 40px -24px rgba(15, 23, 42, 0.45)'
      },
      borderRadius: {
        pill: '999px'
      }
    }
  },
  plugins: [],
};
