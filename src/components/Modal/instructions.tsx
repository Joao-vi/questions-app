import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";

export function InstructionsModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  /* prettier-ignore */
  useEffect(() => {
    setTimeout(() => {onOpen();}, 1000);}, [onOpen]);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Instruções</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Prezado participante, você está na página de registro, é
              necessário preencher corretamente os campos solicitados. <br />
              Peço que preste atenção ao campo{" "}
              <Text as="span" color="teal.400" fontWeight="bold">
                Qtd. Questões
              </Text>
              , é aqui onde você escolher quantas questões deseja responder em
              nosso questionário. <br />{" "}
              <Text
                as="span"
                display="inline-block"
                pt="3"
                color="teal.400"
                fontWeight="bold"
              >
                {" "}
                Obrigado e ótima prova!{" "}
              </Text>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button bgColor="teal.400" colorScheme="teal" onClick={onClose}>
              Entendi
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
