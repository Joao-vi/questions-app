import {
  Box,
  Stack,
  HStack,
  Text,
  Icon,
  Button,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

import { MdLibraryBooks } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";
import { InputForm } from "./inputForm";
export function Registration() {
  return (
    <Box as="section" w="94%" maxW={1200} mx="auto">
      <Stack
        spacing="1"
        bgColor={useColorModeValue("gray.100", "gray.700")}
        my="2"
        boxShadow="sm"
        px="10"
        py="12"
        borderRadius={10}
      >
        <Text as="h1" textAlign="start" fontSize="3xl" mb="1">
          <Icon as={MdLibraryBooks} mr="1" />
          Registro
        </Text>
        <Divider />
        <Stack as="form" spacing="2" pt="20px">
          <HStack>
            <InputForm id="name" label="Nome" type="text" />
            <InputForm id="city" label="Cidade" type="text" />
          </HStack>
          <HStack w="25%">
            <InputForm id="age" label="Idade" number min={18} max={99} />
            <InputForm
              id="numberQuestions"
              label="Qtd. Questões"
              number
              min={1}
              max={10}
            />
          </HStack>

          <Button
            disabled
            mt="20px!important"
            variant="solid"
            colorScheme="teal"
            backgroundColor="teal.400"
            alignSelf="end"
            type="submit"
            rightIcon={<Icon as={GrFormNextLink} />}
          >
            Continuar
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
