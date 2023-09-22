/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx}"
  ],
  theme: {
    extend: {

      colors: {
        primary: "#96d700",
        grey: "#c4c4c4"
      },
      fontFamily: {
        poppins: "Poppins",
        billabong: "Billabong"
      },
      backgroundImage: {
        wavePattern: "url('/src/assets/wave.svg')",
        shoppingOnline: "url('/src/assets/shopping_online.svg')",
        shoppingSales: "url('/src/assets/shopping_sales.jpg')",
        ceo: "url('/src/assets/ceo.jpeg')"
      }

    },
  },
  plugins: [],
}

