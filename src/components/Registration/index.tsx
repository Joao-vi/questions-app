import {
  Box,
  Stack,
  Text,
  Icon,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

import { MdLibraryBooks } from "react-icons/md";

import { FormRegistration } from "./Form";

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
        <FormRegistration />
      </Stack>
    </Box>
  );
}
