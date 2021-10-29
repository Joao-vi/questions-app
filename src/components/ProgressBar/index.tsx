import { Box, Flex } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import { TextProgressBar } from "./textProgessBar";

export function ProgressBar() {
  return (
    <Box as="section" maxW={1200} mx="auto" w="94%">
      <Flex
        alignItems="center"
        justifyContent="space-evenly"
        p="4"
        bgColor={useColorModeValue("gray.100", "gray.700")}
        borderRadius={10}
        boxShadow="sm"
      >
        <TextProgressBar path="/">Registro</TextProgressBar>
        <TextProgressBar path="/questions">Perguntas</TextProgressBar>
        <TextProgressBar path="/teste">Resultado</TextProgressBar>
      </Flex>
    </Box>
  );
}
