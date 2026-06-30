/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Override the 'slate' palette with a pastel, feminine set
        slate: {
          50: '#fff9fb',
          100: '#fdeef6',
          200: '#fbdfee',
          300: '#f7cfe5',
          400: '#f3b8db',
          500: '#ef9ccf',
          600: '#e37fbf',
          700: '#c466a6',
          800: '#9b3f82',
          900: '#6e2a5c'
        },
        sky: {
          50: '#f6fbff',
          100: '#e6f4ff',
          200: '#ccecff',
          300: '#b3e1ff',
          400: '#99d6ff',
          500: '#7fc9ff',
          600: '#66baff',
          700: '#4a98e6',
          800: '#3076b3',
          900: '#1f4d73'
        },
        amber: {
          50: '#fffaf2',
          100: '#fff4e6',
          200: '#ffe7cc',
          300: '#ffd8ad',
          400: '#ffc38a',
          500: '#ffad60',
          600: '#ff9540',
          700: '#d9772a',
          800: '#a04e1a',
          900: '#6b3310'
        },
        red: {
          50: '#fff5f6',
          100: '#ffecec',
          200: '#ffd4d8',
          300: '#ffb9c0',
          400: '#ff9aa6',
          500: '#ff6f88',
          600: '#ff4b6b',
          700: '#e03a55',
          800: '#b32c44',
          900: '#7a1d2e'
        }
      }
    }
  },
  plugins: []
}
