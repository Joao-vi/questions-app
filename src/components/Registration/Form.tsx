import {
  Stack,
  Button,
  Icon,
  Text,
  VStack,
  SimpleGrid,
  Grid,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

import { GrFormNextLink } from "react-icons/gr";

import { useContext, useState } from "react";
import { userInputsContext } from "../../context/userInputsContext";

import { InputForm } from "./inputForm";
import { CheckNumberQuestionsModal } from "../Modal/checkNumberQuestions";

interface InputData {
  name: string;
  city: string;
  age: string;
  numberQuestions: string;
}

export function FormRegistration() {
  /* prettier-ignore */
  const {register,handleSubmit,formState: { errors }} = useForm<InputData>();
  const [isOpen, setIsOpen] = useState(false);
  const { queryQuestions } = useContext(userInputsContext);

  // Preciso arranjar uma maneiro de o usuario validar por meio do modal e depois mandar vir em handleSubmitForm
  const handleSubmitForm: SubmitHandler<InputData> = (data) => {
    queryQuestions(data);
  };

  return (
    <Stack
      as="form"
      spacing="2"
      pt="20px"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <CheckNumberQuestionsModal isOpen={isOpen}>
        <Button
          colorScheme="red"
          bgColor="red.500"
          onClick={() => setIsOpen((oldState) => !oldState)}
        >
          Cancelar
        </Button>
        <Button type="submit" colorScheme="teal" bgColor="teal.400">
          Confirmar
        </Button>
      </CheckNumberQuestionsModal>
      <SimpleGrid columns={2} minChildWidth="200px" spacing="3">
        <VStack>
          <InputForm id="name" label="Nome" type="text" register={register} />
          {errors.name && (
            <Text as="span" alignSelf="start" color="red.400" fontWeight="bold">
              Campo Nome é obrigatório.
            </Text>
          )}
        </VStack>
        <VStack>
          <InputForm id="city" label="Cidade" type="text" register={register} />
          {errors.city && (
            <Text as="span" alignSelf="start" color="red.400" fontWeight="bold">
              Campo Cidade é obrigatório.
            </Text>
          )}
        </VStack>
      </SimpleGrid>
      <Grid templateColumns="repeat(auto-fit,minmax(140px,200px))" gap="3">
        <InputForm
          id="age"
          label="Idade"
          number
          min={18}
          max={99}
          register={register}
        />
        <InputForm
          id="numberQuestions"
          label="Qtd. Questões"
          number
          min={1}
          max={10}
          register={register}
        />
      </Grid>

      <Button
        mt="20px!important"
        variant="solid"
        colorScheme="teal"
        backgroundColor="teal.400"
        alignSelf="end"
        type="button"
        onClick={() => setIsOpen((oldState) => !oldState)}
        rightIcon={<Icon as={GrFormNextLink} />}
      >
        Continuar
      </Button>
    </Stack>
  );
}
