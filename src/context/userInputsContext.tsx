import { createContext, ReactNode, useEffect, useState } from "react";
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

interface IUserAnswersQuestions {
  userAnswer: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

type IUserInputsContext = {
  userInputs: InputData | undefined;
  questions: IQuestionType[];
  queryQuestions: SubmitHandler<InputData>;
  userAnswerQuestions: IUserAnswersQuestions[];
  saveUserAnswersOnContext: (answers: IUserAnswersQuestions[]) => void;
};

export const userInputsContext = createContext({} as IUserInputsContext);

type UserInputContextProviderProps = {
  children: ReactNode;
};

/* prettier-ignore */
export function UserInputContextProvider({children}: UserInputContextProviderProps) {
  /*
    Aqui tive que tratar a respota do localStorage pois estava dando conflitos de tipagem com o typescript.
  */
  const userInputsJson = localStorage.getItem('userInputs');
  const userInputsParse = userInputsJson ? JSON.parse(userInputsJson || '{}') : undefined  
  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const history = useHistory();
  const [userInputs, setUserInputs] = useState<InputData >(userInputsParse);
  const [questions, setQuestions] = useState<IQuestionType[]>([]);
  const [userAnswerQuestions, setUserAnswerQuestions] = useState<IUserAnswersQuestions[]>(JSON.parse(localStorage.getItem('userAnswerQuestions')||'[]'));


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

  
  function saveUserAnswersOnContext(answers : IUserAnswersQuestions[]) {
    setUserAnswerQuestions(answers);

  }
 
  useEffect(()=>{
    localStorage.setItem('userAnswerQuestions',JSON.stringify(userAnswerQuestions))
    localStorage.setItem('userInputs',JSON.stringify(userInputs || {}))
  },[userAnswerQuestions,userInputs])


  
  return (
    <userInputsContext.Provider
      value={{ questions, queryQuestions, userInputs,userAnswerQuestions,saveUserAnswersOnContext }}
    >
      {children}
    </userInputsContext.Provider>
  );
}

// const [userInputs, setUserInputs] = useState<InputData>(JSON.parse(localStorage.getItem('userInputs')||'undefined'));
// JSON.parse(localStorage.getItem('userAnswerQuestions')||'[]')
