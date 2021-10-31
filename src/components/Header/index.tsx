/* prettier-ignore */
import {Box,Flex,HStack,Heading,Text,Avatar,IconButton,useBreakpoint,} from "@chakra-ui/react";

import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { userInputsContext } from "../../context/userInputsContext";

export function Header() {
  const { toggleColorMode } = useColorMode();
  const { userInputs } = useContext(userInputsContext);
  const size = useBreakpoint();
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
        <HStack
          spacing={["0", "0", "10"]}
          flexDirection={["column", "column", "row"]}
        >
          <Heading display="inline" border="1px" borderRadius={5} px="1">
            Q
            <Text as="span" color="teal.300" fontSize="4xl">
              4
            </Text>
            Y
          </Heading>
          <Heading fontSize={["24px", "28px", "32px"]}>
            Question for You.
          </Heading>
        </HStack>
        <HStack borderLeft="1px" pl="4" borderColor="gray.500" spacing="3">
          <IconButton
            onClick={toggleColorMode}
            variant="outline"
            borderColor="gray.500"
            aria-label="Modo claro/escuro"
            bgColor={useColorModeValue("transparent", "teal")}
            icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
          />
          {userInputs && (
            <Flex alignItems="flex-start">
              <Avatar name={userInputs?.name} />
              {size === "base" ? null : (
                <Box pl="1">
                  <Text fontSize="md" fontWeight="medium">
                    {userInputs?.name}
                  </Text>
                  <Text fontSize="sm" pt={0}>
                    {userInputs?.city}
                  </Text>
                </Box>
              )}
            </Flex>
          )}
        </HStack>
      </Flex>
    </Box>
  );
}

/*<Flex alignItems="flex-start">
                <Avatar name={userInputs.name} />
                {size === "base" ? null : (
                  <Box pl="1">
                    <Text fontSize="md" fontWeight="medium">
                      {userInputs.name}
                    </Text>
                    <Text fontSize="sm" pt={0}>
                      {userInputs.city}
                    </Text>
                  </Box>
                )}
              </Flex> */
