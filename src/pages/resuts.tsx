import { Flex } from "@chakra-ui/react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProgressBar } from "../components/ProgressBar";
import { ScoreBoard } from "../components/scoreBoard/indext";

export function ResultsPage() {
  return (
    <Flex as="main" flexDir="column" w="100vw" h="100vh">
      <Header />
      <ProgressBar />
      <ScoreBoard />
      <Footer />
    </Flex>
  );
}
