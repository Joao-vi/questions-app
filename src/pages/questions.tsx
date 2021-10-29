import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { userInputsContext } from "../context/userInputsContext";

import { Header } from "../components/Header";
import { ProgressBar } from "../components/ProgressBar";
import { RadioCard } from "../components/Question/radioCard";

interface IUserAnswersQuestions {
  category: string;
  question: string;
  userAnswer: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export function QuestionsPage() {
  const { questions } = useContext(userInputsContext);
  /* prettier-ignore */
  const [userAnswerQuestions, setUserAnswerQuestions] = useState<IUserAnswersQuestions[]>();

  questions && console.log();

  const options = ["react", "vue", "svelte"];
  console.log(questions);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    onChange: console.log,
  });
  // !![Não sei extamente oque faz] :
  const group = getRootProps();

  return (
    <>
      <Flex as="main" flexDir="column" w="100vw" h="100vh">
        <Header />
        <ProgressBar />
        <Box as="section" w="94%" maxW={1200} mx="auto">
          <Flex
            as="form"
            flexDirection="column"
            p="5"
            borderRadius={10}
            boxShadow="sm"
            bgColor={useColorModeValue("gray.100", "gray.700")}
          >
            <Text>Qual é a raiz quadrada de 50 ? </Text>
            <VStack {...group}>
              {questions &&
                questions[0].incorrect_answers.map((value) => {
                  // Aqui ira criar as props dos inputs automaticamente, mudando entre elas apenas o [value]
                  const radio = getRadioProps({ value });

                  return (
                    <RadioCard key={value} {...radio}>
                      {value}
                    </RadioCard>
                  );
                })}
            </VStack>
          </Flex>
        </Box>
        <Box as="section" w="94%" maxW={1200} mx="auto"></Box>
      </Flex>
    </>
  );
}
