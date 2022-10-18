import { Container } from "react-bootstrap";
import React from "react";
import ItemCard from "./ItemCard";

const img1 =
  "https://img.freepik.com/premium-photo/close-up-hand-technician-using-manifold-gauge-filling-air-conditioners_101448-2962.jpg?size=626&ext=jpg&ga=GA1.2.594929802.1662414653";
const img2 =
  "https://img.freepik.com/premium-photo/pouring-splash-oil-car-motor-vegetable-olive-isolated-white-background_53089-134.jpg?size=626&ext=jpg&ga=GA1.2.594929802.1662414653";
const img3 =
  "https://img.freepik.com/premium-photo/technician-using-measuring-tool-checking-electric-outdoor-air-compressor_101448-3842.jpg?size=626&ext=jpg&ga=GA1.2.594929802.1662414653";

const titleCard1 = "Logatherm";
const textCard1 =
  "Efektywne rozwiązanie dla domów jednorodzinnych, zarówno w nowym budownictwie, jak i przy rozbudowie istniejącego systemu grzewczego. Jest ona już przystosowana do połączenia z systemem fotowoltaicznym, dzięki czemu może być zasilana samodzielnie wytworzonym prądem.";
const titleCard2 = "Logatherm";
const textCard2 =
  "System grzewczy dla tych, którzy chcą chronić środowisko i obniżyć koszty energii. Wysokowydajna pompa ciepła może pracować ze zbiornikiem c.w.u. lub bez, jest wyjątkowo cicha i bardzo kompaktowa, nadaje się nawet do małych pomieszczeń.";
const titleCard3 = "Aplikacja MyBuderus";
const textCard3 =
  "Aplikacja pozwala wygodnie łączyć się z systemem grzewczym z dowolnego miejsca i w dowolnym czasie, umożliwia także zdalny nadzór Specjaliście. Jest to niezwykłe ułatwienie zwiększające wygodę i usprawniające prace konserwacyjne systemu grzewczego.";

const ItemCards = () => {
  return (
    <Container>
      <div className="row mt-5">
        <div className="col">
          <ItemCard image={img1} title={titleCard1} text={textCard1} />
        </div>
        <div className="col ">
          <ItemCard image={img2} title={titleCard2} text={textCard2} />
        </div>
        <div className="col ">
          <ItemCard image={img3} title={titleCard3} text={textCard3} />
        </div>
      </div>
    </Container>
  );
};

export default ItemCards;
