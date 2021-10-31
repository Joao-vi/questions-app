import { SignInPage } from "./pages";
import { QuestionsPage } from "./pages/questions";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserInputContextProvider } from "./context/userInputsContext";
import { ResultsPage } from "./pages/resuts";

// LocalStorage = Resultado.

export function App() {
  return (
    <Router>
      <UserInputContextProvider>
        <ChakraProvider theme={theme}>
          <Route path="/" exact>
            <SignInPage />
          </Route>
          <Route path="/questions" exact>
            {/* {questions ? <QuestionsPage /> : <Redirect to="/" />} */}
            <QuestionsPage />
          </Route>
          <Route path="/results" exact>
            <ResultsPage />
          </Route>
        </ChakraProvider>
      </UserInputContextProvider>
    </Router>
  );
}
