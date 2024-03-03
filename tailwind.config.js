/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},

    colors: {
      'green': '#96f321',
      'greenhover': '#879c63',
      'blue': '#2196f3',
      'white': '#ffffff',
      'black': '#000000',
    },

  },
  plugins: [],
}
