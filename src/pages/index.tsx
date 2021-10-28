import { Flex, Box } from "@chakra-ui/react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { InstructionsModal } from "../components/Modal/instructions";
import { ProgressBar } from "../components/ProgressBar";
import { Registration } from "../components/Registration";

export function SignInPage() {
  return (
    <Flex as="main" flexDir="column" w="100vw" h="100vh">
      <InstructionsModal />
      <Header />
      <Box mb="auto" mt="5">
        <ProgressBar />
        <Registration />
      </Box>
      <Footer />
    </Flex>
  );
}
