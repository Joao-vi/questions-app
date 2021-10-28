import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { UseFormRegister, Path } from "react-hook-form";

interface InputData {
  name: string;
  city: string;
  age: string;
  numberQuestions: string;
}

interface InputFormProps {
  id: Path<InputData>;
  register: UseFormRegister<InputData>;
  number?: boolean;
  label: string;
  min?: number;
  max?: number;
  type?: string;
}

export function InputForm({
  id,
  label,
  type = "text",
  number = false,
  min = 0,
  max = 100,
  register,
  ...rest
}: InputFormProps) {
  return number ? (
    <FormControl id={id}>
      <FormLabel fontWeight="normal">{label}</FormLabel>
      <NumberInput
        defaultValue={min}
        min={min}
        max={max}
        borderColor="gray.400"
      >
        <NumberInputField {...register(id)} />
        <NumberInputStepper>
          <NumberIncrementStepper borderColor="gray.400" />
          <NumberDecrementStepper borderColor="gray.400" />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  ) : (
    <FormControl id={id} borderColor="gray.400">
      <FormLabel fontWeight="normal">{label}</FormLabel>
      <Input type={type} {...rest} {...register(id, { required: true })} />
    </FormControl>
  );
}
