import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";

function ItemCard(props) {
  return (
    <Card style={{ width: "18rem" }} className="m-auto">
      <Card.Img
        variant="top"
        src={props.image}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">
          <Link href={props.extLink}>
            <a style={{ color: "white", textDecoration: "none" }}>More...</a>
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
