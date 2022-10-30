/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {},
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#F97316',

          secondary: '#1E3A8A',

          accent: '#22D3EE',

          neutral: '#1e293b',

          'base-100': '#FFFFFF',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
