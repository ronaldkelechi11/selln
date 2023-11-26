/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx}"
  ],
  theme: {
    extend: {

      colors: {
        primary: "#96d700",
        grey: "#c4c4c4",
        red: "rgb(255,112,110)"
      },
      fontFamily: {
        poppins: "Poppins",
        billabong: "Billabong"
      },
      backgroundImage: {
        signupPattern: "url('/src/assets/signup.svg')",
        signinPattern: "url('/src/assets/signin.svg')",
        s1Pattern: "url('/src/assets/images/S1.jpg')",
        s2Pattern: "url('/src/assets/images/S2.jpg')"
      }

    },
  },
  plugins: [],
}

