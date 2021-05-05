import Header from "./Components/Layout/Header";
import TodoList from "./Components/Todo/TodoList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContext";
import GlobalContextProvider from "./Contexts/GlobalContext";
import PublicRoute from "./Routes/PublicRoute";

function App() {
  return (
    <Router>
      <GlobalContextProvider>
        <AuthContextProvider>
          <Header />
          <Switch>
            <PublicRoute exact path="/" component={TodoList} />
          </Switch>
        </AuthContextProvider>
      </GlobalContextProvider>
    </Router>
  );
}

export default App;
