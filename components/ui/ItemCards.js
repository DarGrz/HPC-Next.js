import { Container } from "react-bootstrap";
import React from "react";
import ItemCard from "./ItemCard";

const img1 =
  "https://img.freepik.com/premium-photo/close-up-hand-technician-using-manifold-gauge-filling-air-conditioners_101448-2962.jpg?size=626&ext=jpg&ga=GA1.2.594929802.1662414653";
const img2 =
  "https://img.freepik.com/premium-photo/pouring-splash-oil-car-motor-vegetable-olive-isolated-white-background_53089-134.jpg?size=626&ext=jpg&ga=GA1.2.594929802.1662414653";
const img3 =
  "https://img.freepik.com/premium-photo/technician-using-measuring-tool-checking-electric-outdoor-air-compressor_101448-3842.jpg?size=626&ext=jpg&ga=GA1.2.594929802.1662414653";

const ItemCards = () => {
  return (
    <Container>
      <div className="row mt-5">
        <div className="col">
          <ItemCard image={img1} />
        </div>
        <div className="col ">
          <ItemCard image={img2} />
        </div>
        <div className="col ">
          <ItemCard image={img3} />
        </div>
      </div>
    </Container>
  );
};

export default ItemCards;
