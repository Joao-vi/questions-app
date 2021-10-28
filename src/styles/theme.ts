// theme.js
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode, GlobalStyleProps } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: (props: GlobalStyleProps) => ({
    html: {
      fontSize: ["92%", "100%", "100%"],
    },
    body: {
      bg: mode("gray.50", "gray.800")(props),
      color: mode("gray.700", "gray.100")(props),
    },
  }),
};

export const theme = extendTheme({
  styles,
  fonts: {
    body: "Roboto",
    heading: "Roboto",
  },
  config,
});
