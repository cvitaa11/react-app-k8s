import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContext";
import PublicRoute from "./Routes/PublicRoute";
import Layout from "./Components/Layout/Layout";
import TodoList from "./Components/Todo/TodoList";
import About from "./Components/Common/About";
import Contact from "./Components/Common/Contact";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Switch>
          <PublicRoute exact path="/" layout={Layout} component={TodoList} />
          <PublicRoute exact path="/about" layout={Layout} component={About} />
          <PublicRoute
            exact
            path="/contact"
            layout={Layout}
            component={Contact}
          />
        </Switch>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
