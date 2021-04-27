import Header from "./Components/Layout/Header";
import TodoList from "./Components/Todo/TodoList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={TodoList} />
      </Switch>
    </Router>
  );
}

export default App;
