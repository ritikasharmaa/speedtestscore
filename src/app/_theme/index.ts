import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const fonts = {
  rubik,
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props: any) => ({
    ":root": {
      "--secondary-bg-color": mode("#1A202C", "#1A202C")(props),
    },
    body: {
      bg: mode("gray.100", "gray.900")(props),
      color: mode("gray.800", "whiteAlpha.900")(props),
      fontFamily: fonts.rubik.style.fontFamily,
    },
  }),
};

const theme = extendTheme({
  config,
  styles,
  fonts: {
    heading: fonts.rubik.style.fontFamily,
    body: fonts.rubik.style.fontFamily,
  },
});

export default theme;
