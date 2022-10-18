import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ItemCard(props) {
  return (
    <Card style={{ width: "18rem" }} className="m-auto">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">Go home</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
