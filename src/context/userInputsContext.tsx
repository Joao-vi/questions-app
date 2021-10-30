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
  questions: IQuestionType[];
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
  const [questions, setQuestions] = useState<IQuestionType[]>([]);


  const queryQuestions: SubmitHandler<InputData> = async (userData) => {
    setUserInputs(userData);
    // Como todas as opções de respostas não vieram em uma mesma variavel do banco de dados, preciso coloca-las agora para poder usar no componente RadioCard.
    const {data:{results}} = await api.get(`?amount=${userData.numberQuestions}`)   
      const modifiedResults = results.map((question :any)=>{
        return{
          category: question.category,
          correct_answer: question.correct_answer,
          difficulty: question.difficulty,
          question: question.question,
          type: question.type,
          incorrect_answers: [question.correct_answer,...question.incorrect_answers],
        }
      })
      // Agora que consegui colocar todas as opções de resposta na variavel [incorrect_answers] irei dar o setQuestions
      setQuestions(modifiedResults);
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

/*

*/
