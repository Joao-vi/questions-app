import { createContext, ReactNode, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router";
import { api } from "../services/api";

interface InputData {
  name: string;
  city: string;
  age: string;
  numberQuestions: string;
}

interface IQuestionType {
  category: string;
  correct_answer: string;
  difficulty: string;
  question: string;
  type: string;
  incorrect_answers: [];
}

type IUserInputsContext = {
  userInputs: InputData | undefined;
  questions: IQuestionType[] | undefined;
  queryQuestions: SubmitHandler<InputData>;
};

export const userInputsContext = createContext({} as IUserInputsContext);

type UserInputContextProviderProps = {
  children: ReactNode;
};

/* prettier-ignore */
export function UserInputContextProvider({children}: UserInputContextProviderProps) {
  const history = useHistory();
  const [userInputs, setUserInputs] = useState<InputData>();
  const [questions, SetQuestions] = useState();


  // Aqui não sei se esta certo a requisição.
  const queryQuestions: SubmitHandler<InputData> = async (userData) => {
    setUserInputs(userData);
    const {data} = await api.get(`?amount=${userData.numberQuestions}`)     
    SetQuestions(data.results);
      history.push("/questions");
  };

  return (
    <userInputsContext.Provider
      value={{ questions, queryQuestions, userInputs }}
    >
      {children}
    </userInputsContext.Provider>
  );
}
