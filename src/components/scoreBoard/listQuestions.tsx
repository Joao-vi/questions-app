import { Box } from "@chakra-ui/layout";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { useContext } from "react";
import { userInputsContext } from "../../context/userInputsContext";

export function ListQuestions() {
  const { userAnswerQuestions } = useContext(userInputsContext);

  return (
    <Accordion allowMultiple maxH="400px" h="400px" overflowY="scroll">
      {userAnswerQuestions.map((question) => {
        return (
          <AccordionItem key={`ID - ${question.question}`}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="medium">
                  {question.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            {question.incorrect_answers.map((alternatives) => {
              /* prettier-ignore*/
              const shouldBgTeal = (question.userAnswer === question.correct_answer) && (question.userAnswer === alternatives );
              /* prettier-ignore*/
              const shoulBgRed = (question.userAnswer !== question.correct_answer) && (question.userAnswer === alternatives);
              /* prettier-ignore*/
              const isTheCorrectAnswer =  question.correct_answer === alternatives;
              // debugger;
              if (shouldBgTeal) {
                return (
                  /* prettier-ignore*/
                  <AccordionPanel my='2' ml='3' borderRadius={10} key={`ID - ${alternatives}`} pb={4} bgColor="teal.400" >
                    {alternatives}
                  </AccordionPanel>
                );
              } else if (shoulBgRed) {
                return (
                  /* prettier-ignore*/
                  <AccordionPanel my='2' ml='3' borderRadius={10} key={`ID - ${alternatives}`} pb={4} bgColor="red.700" >
                    {alternatives}
                  </AccordionPanel>
                );
              } else if (isTheCorrectAnswer) {
                return (
                  /* prettier-ignore*/
                  <AccordionPanel my='2' ml='3' borderRadius={10} key={`ID - ${alternatives}`} pb={4} bgColor="teal.400" >
                    {alternatives}
                  </AccordionPanel>
                );
              } else {
                return (
                  /* prettier-ignore*/
                  <AccordionPanel my='2' ml='3' borderRadius={10} key={`ID - ${alternatives}`} pb={4} bgColor="transparent" >
                    {alternatives}
                  </AccordionPanel>
                );
              }
            })}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
