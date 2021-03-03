import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
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
