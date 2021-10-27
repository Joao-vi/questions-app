import {
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  Avatar,
  IconButton,
  Icon,
} from "@chakra-ui/react";

import { BsSun, BsMoon } from "react-icons/bs";

import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export function Header() {
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      mb="2"
      bgColor={useColorModeValue("gray.100", "gray.700")}
      boxShadow="sm"
      borderBottom="1px"
      borderColor={useColorModeValue("transparent", "gray.700")}
      p="4"
    >
      <Flex
        as="header"
        maxW={1200}
        w="94%"
        m="auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack spacing="10">
          <Heading display="inline" border="1px" px="6px" borderRadius={5}>
            Q
            <Text as="span" color="teal.300" fontSize="4xl">
              4
            </Text>
            Y
          </Heading>
          <Heading>Question for You.</Heading>
        </HStack>
        <HStack borderLeft="1px" pl="4" borderColor="gray.500" spacing="3">
          <IconButton
            onClick={toggleColorMode}
            variant="outline"
            borderColor="gray.500"
            aria-label="Modo claro/escuro"
            bgColor={useColorModeValue("transparent", "teal")}
            icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
          ></IconButton>
          <Flex alignItems="flex-start">
            <Avatar name="Kola Tioluwani" />
            <Box pl="1">
              <Text fontSize="md" fontWeight="medium">
                Kola Tioluwani
              </Text>
              <Text fontSize="sm" pt={0}>
                Japão
              </Text>
            </Box>
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
}
