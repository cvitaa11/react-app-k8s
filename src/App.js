import Header from "./Components/Layout/Header";
import TodoList from "./Components/Todo/TodoList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={TodoList} />
        </Switch>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
