import {
  Avatar,
  Box,
  SimpleGrid,
  Stack,
  useColorModeValue,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Grid,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { userInputsContext } from "../../context/userInputsContext";
import { ListQuestions } from "./listQuestions";

export function ScoreBoard() {
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
              João Victor
            </Text>
            <Text fontSize="sm" pt={0}>
              Cuiabá
            </Text>
          </Box>
          <Text as="span">
            Você acertou{" "}
            <Text as="span" fontWeight="bold" color="teal.500">
              4
            </Text>{" "}
            de 10.
          </Text>
          <CircularProgress value={40} color="teal.500" size="100px">
            <CircularProgressLabel>40%</CircularProgressLabel>
          </CircularProgress>
        </Stack>

        <ListQuestions />
      </Grid>
    </Box>
  );
}
//
