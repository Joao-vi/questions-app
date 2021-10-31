/* prettier-ignore */
import {Box,Flex,HStack,Text,IconButton,Icon,useColorModeValue,Link} from "@chakra-ui/react";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export function Footer() {
  return (
    <Box
      as="footer"
      bgColor={useColorModeValue("gray.100", "gray.700")}
      boxShadow="sm"
      p="4"
      justifySelf="flex-end"
    >
      <Flex alignItems="center" justifyContent="center" flexDir="column">
        <Text as="p">Feito por João.</Text>
        <HStack color="gray.500" spacing="3" fontSize="24px" mt="2">
          <Link href="https://github.com/Joao-vi" isExternal>
            <IconButton
              bgColor="teal.400"
              aria-label="Perfil GitHub"
              colorScheme="teal"
              icon={<Icon as={AiFillGithub} />}
            />
          </Link>

          <Link href="https://www.linkedin.com/in/joao-vi/" isExternal>
            <IconButton
              aria-label="Perfil LinkedIn"
              bgColor="teal.400"
              colorScheme="teal"
              icon={<Icon as={AiFillLinkedin} />}
            />
          </Link>
          <IconButton
            bgColor="teal.400"
            aria-label="Endereço de e-mail"
            colorScheme="teal"
            icon={<Icon as={MdEmail} />}
          />
        </HStack>
      </Flex>
    </Box>
  );
}
