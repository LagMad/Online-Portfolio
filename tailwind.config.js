/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
        RammettoOne: ['RammettoOne'],
        Poppins: ['Poppins'],
        PlusJakartaSans: ['PlusJakartaSans'],
        Playfair: ["Playfair"],
      },
      colors: {
        'cust-orange-light': '#FFF0E8',
        'cust-orange-light-hover': '#FEE8DC',
        'cust-orange-light-active': '#FDD0B6',
        'cust-orange-normal': '#FA6815',
        'cust-orange-normal-hover': '#E15E13',
        'cust-orange-normal-active': '#C85311',
        'cust-orange-dark': '#BC4E10',
        'cust-orange-dark-hover': '#963E0D',
        'cust-orange-dark-active': '#702F09',
        'cust-orange-darker': '#582407',

        'cust-black-light': '#E6E6E6',
        'cust-black-light-hover': '#D9D9D9',
        'cust-black-light-active': '#B0B0B0',
        'cust-black-normal': '#000000',

        "cust-darkest-blue": "#000C39",
        "cust-darker-blue": "#001767",
        "cust-lighter-blue": "#3876BF",
        "cust-lightest-blue": "#C3DFFF",
        "cust-green": "#23B000",
        "cust-red": "#BA0000",
        "cust-orange": "#FF9900"
      },
      backgroundImage: {
        'HeroSection': "url('/src/assets/SchotivalOnStage.png')",
        'BEM': "url('/src/assets/BEM.png')",
        'TSA-UB': "url('/src/assets/TSABrawijaya.png')",
        'WebAgroIndo': "url('/src/assets/AgroIndo.png')",
        'WebBEM': "url('/src/assets/SSWebBEMDarkened.png')",
        'WithCat': "url('/src/assets/WithCatDarkened.png')",
      }
    },
  },
  plugins: [],
}