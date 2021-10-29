import { VStack, Text, HStack, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

import styled from "@emotion/styled";

type CustomModalProps = {
  isOpen: boolean;
};

const CustomModal = styled.div<CustomModalProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  z-index: 99;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

interface ICheckNumberQuestionsModalProps {
  children: ReactNode;
  isOpen: boolean;
}
/* prettier-ignore */
export function CheckNumberQuestionsModal({children,isOpen = false,}: ICheckNumberQuestionsModalProps) {
  return (
    <CustomModal isOpen={isOpen}>
      <VStack
        bgColor={useColorModeValue("gray.100", "gray.700")}
        margin="auto"
        mt="100px"
        maxW="400px"
        padding="5"
        boxShadow="md"
        borderRadius={10}
        spacing="3"
      >
        <Text
          as="h1"
          fontWeight="medium"
          fontSize="lg"
          alignItems="start"
          alignSelf="start"
        >
          Aviso
        </Text>
        <Text>
          Presado participante, por favor verificar o campo{" "}
          <Text as="span" fontWeight="bold" color="teal.500">
            Qtd. Questions
          </Text>{" "}
          , caso deseje mudar clique em{" "}
          <Text as="span" fontWeight="bold" color="red.500">
            cancelar
          </Text>{" "}
          .
        </Text>
        <HStack spacing="2">{children}</HStack>
      </VStack>
    </CustomModal>
  );
}
