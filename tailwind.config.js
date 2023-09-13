/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'text-underline-offset': '4px',
          },
        },
      }),
    },
    
  },
  plugins: [],
}

