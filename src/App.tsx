import { SignInPage } from "./pages";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <SignInPage />
    </ChakraProvider>
  );
}
