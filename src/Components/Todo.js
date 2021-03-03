import { Card } from "react-bootstrap";

const Todo = ({ title, desc }) => {
  return (
    <Card style={{ width: "18rem", margin: 10 }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Link href="#">Done</Card.Link>
        <Card.Link href="#">Remove</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Todo;
