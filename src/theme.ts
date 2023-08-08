import { extendTheme } from "native-base";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  primary: {
    50: "#e9f2f6",
    100: "#cfd9e7",
    200: "#b1c1d8",
    300: "#92a9c9",
    400: "#7491b9",
    500: "#5578aa",
    600: "#446088",
    700: "#334866",
    800: "#223044",
    900: "#111822",
  },
};

export default extendTheme({ config, colors });
