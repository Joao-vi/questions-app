import {
  Avatar,
  Box,
  Stack,
  useColorModeValue,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Grid,
} from "@chakra-ui/react";
import { useContext } from "react";
import { userInputsContext } from "../../context/userInputsContext";
import { ListQuestions } from "./listQuestions";

export function ScoreBoard() {
  const { userAnswerQuestions, userInputs } = useContext(userInputsContext);

  const totalQuestions = userAnswerQuestions.length;
  /* prettier-ignore */
  const totalCorrectAnswers = userAnswerQuestions.reduce((sum, current) => {
      if (current.userAnswer === current.correct_answer) {
        return sum + 1;
      } else return sum + 0;
    },0);
  const percentage = Math.round((100 * totalCorrectAnswers) / totalQuestions);
  debugger;
  return (
    <Box as="section" w="94%" maxW={1200} mx="auto" mb="auto">
      <Grid
        as="section"
        templateColumns="repeat(auto-fit, minmax(250px,1fr))"
        gap={["20px", "20px", "0"]}
        bgColor={useColorModeValue("gray.100", "gray.700")}
        my="2"
        boxShadow="sm"
        px="10"
        py="12"
        borderRadius={10}
      >
        <Stack flexDirection="column" alignItems="center">
          <Avatar name="João" size="lg" />
          <Box pl="1" textAlign="center">
            <Text fontSize="md" fontWeight="medium">
              {userInputs?.name}
            </Text>
            <Text fontSize="sm" pt={0}>
              {userInputs?.city}
            </Text>
          </Box>
          <Text as="span">
            Você acertou{" "}
            <Text as="span" fontWeight="bold" color="teal.500">
              {totalCorrectAnswers}
            </Text>{" "}
            de {totalQuestions}.
          </Text>
          <CircularProgress value={percentage} color="teal.500" size="100px">
            <CircularProgressLabel>{percentage}%</CircularProgressLabel>
          </CircularProgress>
        </Stack>

        <ListQuestions />
      </Grid>
    </Box>
  );
}
//
