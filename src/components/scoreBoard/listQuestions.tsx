import { MinusIcon, AddIcon } from "@chakra-ui/icons";
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
    <Accordion allowMultiple maxH="400px" overflow="auto">
      {userAnswerQuestions.map((question) => {
        return (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {question.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            {question.incorrect_answers.map((alternatives) => {
              return <AccordionPanel pb={4}>{alternatives}</AccordionPanel>;
            })}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
