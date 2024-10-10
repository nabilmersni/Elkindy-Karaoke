/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7586FF",
        secondaryLight: "#FFECD6",
        secondaryDark: "#FFAC1D",
        lightBlue: "#AED2FF",
        darkBlue: "#006BBE",
        headerBG: "#DBDFFD",
        blackk: "#02241A",
        bodyBg: "#E9F6FF",
        nav: "#627BBC",
      },
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
      },
      fontSize: {},

      boxShadow: {
        custom: "5px 5px 10px 3px rgba(0, 0, 0, 0.15)",
        custom2: "0px 5px 10px 1px rgba(0, 0, 0, 0.05)",
        custom3: "0px 5px 10px 1px rgba(0, 0, 0, 0.08)",
        custom4: "5px 5px 10px 3px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
});
