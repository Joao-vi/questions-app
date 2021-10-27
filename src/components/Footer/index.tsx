import {
  Box,
  Flex,
  HStack,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export function Footer() {
  return (
    <Box
      as="footer"
      bgColor={useColorModeValue("gray.100", "gray.700")}
      boxShadow="sm"
      p="8"
      justifySelf="flex-end"
    >
      <Flex alignItems="center" justifyContent="center" flexDir="column">
        <Text as="p">Feito por João.</Text>
        <HStack color="gray.500" spacing="3" fontSize="24px">
          <Icon as={AiFillGithub} />
          <Icon as={AiFillLinkedin} />
          <Icon as={MdEmail} />
        </HStack>
      </Flex>
    </Box>
  );
}
