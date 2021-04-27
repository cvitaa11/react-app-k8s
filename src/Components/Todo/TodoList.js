import { useEffect, useState, useContext } from "react";
import { Container, Row } from "react-bootstrap";
import Todo from "./Todo";
import { todoService } from "../../Services/TodoService";
import { AuthContext } from "../../Contexts/AuthContext";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [update, setUpdate] = useState(new Date());

  const { isLogged } = useContext(AuthContext);
  console.log("isLogged", isLogged);

  useEffect(() => {
    todoService
      .getTodos()
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, [update]);

  return (
    <Container fluid>
      <Row>
        {todos.length !== 0 ? (
          todos.map((todo) => (
            <Todo key={todo.id} todo={todo} setUpdate={setUpdate} />
          ))
        ) : (
          <h3 className="no-todos">There are no todos</h3>
        )}
      </Row>
    </Container>
  );
};

export default TodoList;
