import { Text, VStack } from "@chakra-ui/react";

import { RadioCard } from "./radioCard";

interface Question {
  question: any;
  indexArray: string;
  group: any;
  getRadioProps: any;
}

export function Question({
  question,
  indexArray,
  group,
  getRadioProps,
}: Question) {
  return;
  {
    question && (
      <>
        <Text> {question[indexArray].question} </Text>
        <VStack {...group}>
          {question &&
            question[indexArray].incorrect_answers.map((value: any) => {
              // Aqui ira criar as props dos inputs automaticamente, mudando entre elas apenas o [value]
              const radio = getRadioProps({ value });

              return (
                <RadioCard key={value} {...radio} isRequired>
                  {value}
                </RadioCard>
              );
            })}
        </VStack>
      </>
    );
  }
}
