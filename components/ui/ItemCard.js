import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";

function ItemCard(props) {
  return (
    <Card style={{ width: "20rem", marginBottom: "1rem" }} className="mx-auto ">
      <Card.Img
        variant="top"
        src={props.image}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <Card.Body style={{ height: "325px" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
      <Button
        variant="primary"
        style={{ width: "30%", marginLeft: "1em", marginBottom: "1em" }}
      >
        <Link href={props.extLink}>
          <a style={{ color: "white", textDecoration: "none" }}>More...</a>
        </Link>
      </Button>
    </Card>
  );
}

export default ItemCard;
