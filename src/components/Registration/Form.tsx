import {
  Stack,
  Button,
  Icon,
  Text,
  VStack,
  SimpleGrid,
  Grid,
} from "@chakra-ui/react";
import { GrFormNextLink } from "react-icons/gr";

import { InputForm } from "./inputForm";

import { SubmitHandler, useForm } from "react-hook-form";

interface InputData {
  name: string;
  city: string;
  age: string;
  numberQuestions: string;
}

export function FormRegistration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputData>();
  const onSubmit: SubmitHandler<InputData> = (data) => {
    console.log(data);
  };
  return (
    <Stack as="form" spacing="2" pt="20px" onSubmit={handleSubmit(onSubmit)}>
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
        type="submit"
        rightIcon={<Icon as={GrFormNextLink} />}
      >
        Continuar
      </Button>
    </Stack>
  );
}
