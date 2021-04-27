import { Card } from "react-bootstrap";
import {todoService} from "../../Services/TodoService"

const Todo = ({ todo, setUpdate }) => {
  const deleteTodo = (id) => {
    todoService.deleteTodo(id)
      .then((res) => {
        setUpdate(new Date());
        alert(JSON.stringify(res.data.message));
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <Card style={{ width: "18rem", margin: 10 }}>
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Text>{todo.description}</Card.Text>
        <Card.Link
          style={{ cursor: "pointer" }}
          onClick={() => deleteTodo(todo.id)}
        >
          Remove
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Todo;
