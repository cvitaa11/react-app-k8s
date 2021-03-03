import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import Todo from "./Todo";
import { apiUrl } from "../Config/Url";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/Todo`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <Container fluid>
      <p>
        <strong>Environment var:</strong> {apiUrl}
      </p>
      <Row>
        {todos.length !== 0
          ? todos.map((todo) => (
              <Todo key={todo.id} title={todo.title} desc={todo.description} />
            ))
          : "There are no todos"}
      </Row>
    </Container>
  );
};

export default TodoList;
