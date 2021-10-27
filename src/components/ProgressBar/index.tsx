import { Box, Flex, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";

export function ProgressBar() {
  return (
    <Box as="section" maxW={1200} mx="auto" w="96%">
      <Flex
        alignItems="center"
        justifyContent="space-evenly"
        p="4"
        bgColor={useColorModeValue("gray.100", "gray.700")}
        borderRadius={10}
        boxShadow="sm"
      >
        <Text
          as="span"
          fontWeight="bold"
          color={useColorModeValue("teal.500", "teal.300")}
          border="1px"
          borderColor="teal.400"
          px="2"
          py="1"
          boxShadow="sm"
          borderRadius={5}
        >
          Cadastro
        </Text>
        <Text
          as="span"
          fontWeight="normal"
          color={useColorModeValue("gray.400", "gray.500")}
        >
          Perguntas
        </Text>
        <Text
          as="span"
          fontWeight="normal"
          color={useColorModeValue("gray.400", "gray.500")}
        >
          Resultado
        </Text>
      </Flex>
    </Box>
  );
}
