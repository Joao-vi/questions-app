/* prettier-ignore */
import {Box,Flex,useColorModeValue,Text,useRadioGroup,VStack,Button,} from "@chakra-ui/react";
import { FormEvent, useContext, useEffect, useState } from "react";

import { userInputsContext } from "../context/userInputsContext";

import { Header } from "../components/Header";
import { ProgressBar } from "../components/ProgressBar";
import { RadioCard } from "../components/Question/radioCard";
import { Footer } from "../components/Footer";
import { useHistory } from "react-router";

interface IUserAnswersQuestions {
  category: string;
  question: string;
  userAnswer: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export function QuestionsPage() {
  const { questions, saveUserAnswersOnContext } = useContext(userInputsContext);
  /* prettier-ignore */
  const [userAnswerQuestions, setUserAnswerQuestions] = useState<IUserAnswersQuestions[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const [indexArray, setIndexArray] = useState(0);

  const history = useHistory();

  const totalQuestions = questions.length - 1;

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "questions",
    onChange: handleSelectedAnswer,
  });

  const group = getRootProps();

  /*--------------------------------------------------------------------------------------------------------

   Essa funçao [handleSelectedAnswer] é responsavel por armazenar a escolha de resposta atual em um estado.
   Ela é ativada na [linha 34], toda vez que o usuario escolhe outra resposta armazenamos sua respota em um estado
   para posteriormente salvarmos em [handleSaveAnswers].


  */
  function handleSelectedAnswer(selectAnswer: string) {
    setCurrentAnswer(selectAnswer);
  }

  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  // --------------------------------------------------------------------------------------------------------

  function handleSaveAnswers(event: FormEvent<HTMLDivElement>) {
    event.preventDefault();
    /* 
       Assim que usuario clica em confirmar salvamos a resposta em [userAnswerQuestions] e com ela os dados da pergunta,
       depois fazemos um spred(...) pra salvar as respostas anteriores. Se nao iria sobrepor as repostas no estado.
    */
    setUserAnswerQuestions([
      {
        userAnswer: currentAnswer,
        category: questions[indexArray].category,
        question: questions[indexArray].question,
        correct_answer: questions[indexArray].correct_answer,
        incorrect_answers: questions[indexArray].incorrect_answers,
      },
      ...userAnswerQuestions,
    ]);

    // Depois que salvei a respota da pergunta, mando para seguir para proxima questao usando o estado [indexArray]
    if (indexArray < totalQuestions) {
      setIndexArray((oldState) => oldState + 1);
    }
  }
  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  /* --------------------------------------------------------------------------------------------------------
    Eu estava tendo problemas em salvar as repostas do usuario la no meu contexto [userInputsContext],
      dentro da função [handleSaveAnswers] além de setar o estado de [userAnswerQuestions] eu também mandava
      as respostas para o contexto global, sendo assim sempre mandando o estado mais antigo,
      ficando de fora do contexto a ultima respota do usuario. E dessa forma causando problemas na pagina de resultado(/results),
      pois eu nao tinha em maos todas as respostas do usuario. Consegui resolver isso com useEffect.
  */
  useEffect(() => {
    saveUserAnswersOnContext(userAnswerQuestions);
    // Quando é a ultima questao e o usuario já respondeu, é mandado para pagina [/results]
    if (userAnswerQuestions.length == questions.length) {
      history.push("/results");
    }
  }, [userAnswerQuestions]);
  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  return (
    <>
      <Flex as="main" flexDir="column" w="100vw" h="100vh">
        <Header />
        <ProgressBar />
        <Box
          as="section"
          w="94%"
          maxW={1200}
          mx="auto"
          mt="2"
          marginBottom="auto"
        >
          <Flex
            as="form"
            flexDirection="column"
            onSubmit={handleSaveAnswers}
            p="5"
            borderRadius={10}
            boxShadow="sm"
            bgColor={useColorModeValue("gray.100", "gray.700")}
          >
            {questions && (
              <>
                <Text as="h1" fontSize="2xl">
                  {" "}
                  {questions[indexArray].question}{" "}
                </Text>
                <VStack my="5" ml="2" alignItems="normal" {...group}>
                  {questions &&
                    questions[indexArray].incorrect_answers.map(
                      (value: any) => {
                        // Aqui ira criar as props dos inputs automaticamente, mudando entre elas apenas o [value]
                        const radio = getRadioProps({ value });
                        // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        return (
                          <RadioCard key={value} {...radio} isRequired>
                            {value}
                          </RadioCard>
                        );
                      }
                    )}
                </VStack>
              </>
            )}

            {totalQuestions === indexArray ? (
              <Button
                type="submit"
                alignSelf="end"
                colorScheme="teal"
                bgColor="teal.500"
              >
                Finalizar
              </Button>
            ) : (
              <Button
                type="submit"
                alignSelf="end"
                bgColor="teal.500"
                colorScheme="teal"
              >
                Proxima
              </Button>
            )}
          </Flex>
        </Box>
        <Footer />
      </Flex>
    </>
  );
}
