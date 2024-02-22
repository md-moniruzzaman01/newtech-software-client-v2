/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btn_secondary: "#253275",
        primary: "#0088FF",
        secondary: "#FEC868",
        lightBlue: "#FFFFE6",
        lightYellow: "#FAE6FA",
        lightSky: "#97ECF1",
        darkBlue: "#9EA1D4",
        darkYellow: "#FEC868",
        lightGreen: "#69DCB5",
        lightBlueGreen: "#69DCD2",
        lightBlueColor: "#69ADDC",
        shadeOfGreen: "#89E077",
        shadeOfBlue: "#83C3FF",
        shadeOfRed: "#FF4136",
      },
    },
  },
  plugins: [],
};
