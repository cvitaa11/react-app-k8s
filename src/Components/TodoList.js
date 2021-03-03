import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import Todo from "./Todo";
import { apiUrl } from "../Config/Url";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [update, setUpdate] = useState(new Date());

  useEffect(() => {
    axios
      .get(`${apiUrl}/Todo`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err.response));
  }, [update]);

  return (
    <Container fluid>
      <Row>
        {todos.length !== 0
          ? todos.map((todo) => (
              <Todo key={todo.id} todo={todo} setUpdate={setUpdate} />
            ))
          : "There are no todos"}
      </Row>
    </Container>
  );
};

export default TodoList;
