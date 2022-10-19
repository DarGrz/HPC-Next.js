import { Container } from "react-bootstrap";
import React from "react";
import ItemCard from "./ItemCard";

const img1 =
  "https://www.buderus.com/landing/media/country-pool/keyvisual_buderus_1_1600x900.webp";
const img2 =
  "https://www.buderus.com/ocsmedia/optimized/1600x900/o372716v296_skv_powietrzne_1.webp";
const img3 =
  "https://img.freepik.com/premium-photo/technician-using-measuring-tool-checking-electric-outdoor-air-compressor_101448-3842.jpg?size=626&ext=jpg&ga=GA1.2.594929802.1662414653";

const titleCard1 = "What is Buderus";
const textCard1 =
  "Buderus is an important part of the Bosch Group. Our company tradition, which stretches back over 290 years, has successfully led us into the 21st century. We started as heating installers and developed into system providers, meaning that our work excels in a number of ways – offering innovative technology, outstanding service and first-rate designs.";
const titleCard2 = "Logatherm";
const textCard2 =
  "A heating system for those who want to protect the environment and reduce energy costs. The high-efficiency heat pump can work with a domestic hot water tank. or without, it is extremely quiet and very compact, even suitable for small rooms.";
const titleCard3 = "MyBuderus App";
const textCard3 =
  "The application allows you to conveniently connect with the heating system from anywhere and at any time, it also allows remote supervision by a specialist. It is a remarkable facilitation, increasing the comfort and streamlining the maintenance works of the heating system.";

const ItemCards = () => {
  return (
    <Container>
      <div className="row mt-5">
        <div className="col">
          <ItemCard
            image={img1}
            title={titleCard1}
            text={textCard1}
            extLink="https://www.buderus.com/en/"
          />
        </div>
        <div className="col ">
          <ItemCard
            image={img2}
            title={titleCard2}
            text={textCard2}
            extLink="https://www.buderus.com/pl/pl/ocs/budynki-mieszkalne/powietrzne-746309-c/"
          />
        </div>
        <div className="col ">
          <ItemCard
            image={img3}
            title={titleCard3}
            text={textCard3}
            extLink="https://play.google.com/store/apps/details?id=com.bosch.tt.buderus&hl=en_IN&gl=US"
          />
        </div>
      </div>
    </Container>
  );
};

export default ItemCards;
