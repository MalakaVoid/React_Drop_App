/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'main-black': '#131313',
        'sup-black': '#808080',
        'white-main': '#ffffff',
        
        'footer-bg': '#e9e9e9',
      }
    },
  },
  plugins: [

  ],
}

