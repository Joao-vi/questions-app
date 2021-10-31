import { Box } from "@chakra-ui/layout";
import { useRadio, UseRadioProps } from "@chakra-ui/radio";
import { ReactNode } from "react";

interface IRadioCardProps extends UseRadioProps {
  children: ReactNode;
}

export function RadioCard(props: IRadioCardProps) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  // getInputProps(array) pega as propriedades de um input html, sendo type e value os mais importantes.
  const input = getInputProps();
  // !![Não sei oque faz]:
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}
