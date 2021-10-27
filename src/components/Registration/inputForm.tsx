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

interface InputFormProps {
  id: string;
  label: string;
  type?: string;
  number?: boolean;
  min?: number;
  max?: number;
}

export function InputForm({
  id,
  label,
  type = "text",
  number = false,
  min = 0,
  max = 100,
}: InputFormProps) {
  return number ? (
    <FormControl id={id}>
      <FormLabel>{label}</FormLabel>
      <NumberInput
        defaultValue={min}
        min={min}
        max={max}
        borderColor="gray.400"
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper borderColor="gray.400" />
          <NumberDecrementStepper borderColor="gray.400" />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  ) : (
    <FormControl id={id} borderColor="gray.400">
      <FormLabel fontWeight="normal">{label}</FormLabel>
      <Input type={type} />
    </FormControl>
  );
}
