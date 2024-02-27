/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        solidWhite: "#FFFFFF",
        solidBlack: "#000000",
        shadeOfGray: "#888888",
        shadeOfBlueDark: "#253275",
        orangeRedShade: "#F24E1E",
        shadeOfBlueLight: "#0088FF",
        shadeOfGreen: "#3D9970",
        shadeOfYellow: "#FFEC00",
        shadeOfLightBlue: "#7FDEFF",
        mutedShadeOfYellow: "#CFC98D",
        paleShadeOfBlue: "#BDD5E7",
        lightShadeOfGreenishYellow: "#EDF9C8",
        LightLavender: "#FAE6FA",
        CyanTurquoise: "#39CCCC",
        VibrantOrange: "#FF851B",
        GreenEmerald: "#2ECC40",
        BlueSky: "#449BFF",
        VeryLightYellow: "#FFFFE6",
        btn_secondary: "#253275",
        primary: "#0088FF",
        secondary: "#FEC868",
        grayWhite: "#F7F7F7",
        shadeOfRed: "#FF4136",
      },
    },
  },
  plugins: [],
};
