/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode:'class',
  theme: {
    colors:{
      darkBrown:'#25251f',
      brown:'#48473a',
      lightBrown:'#626033',
      lightGreen:'#D5E7DC',
      darkGreen:'#3b4a43',
      tan:'#cbc995',
      darkGray:'#1c1c19',
      lightYellow:'#E8E5AB',
      white:'#fffbff',
      bone:'#f7f3f5'
    },
    extend: {
      width:{
        '100vw':'100vw',
      },
      height:{
        '10vh':'10vh',
        '20vh':'20vh',
        '30vh':'30vh',
        '40vh':'40vh',
        '50vh':'50vh',
        '60vh':'60vh',
        '70vh':'70vh',
        '80vh':'80vh',
        '90vh':'90vh',
        '100vh':'100vh',
      }
    },
  },
  plugins: [],
}
