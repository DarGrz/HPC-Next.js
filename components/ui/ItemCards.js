import { Container } from "react-bootstrap";
import React from "react";
import ItemCard from "./ItemCard";

const img1 =
  "https://www.viessmann.pl/content/dam/vi-brands/DE/Logo/viessmann-logo.png/_jcr_content/renditions/original.image_file.328.180.file/viessmann-logo.png";
const img2 =
  "https://www.viessmann.pl/content/dam/vi-brands/PL/Produkty/Vitocal_100-S/Vitocal-100-S_XL.jpg/_jcr_content/renditions/original.image_file.1440.450.file/Vitocal-100-S_XL.jpg";
const img3 =
  "https://www.viessmann.pl/content/dam/vi-brands/DE/Produkte/Waermepumpen/Vitocal_200-S/vitocal-200-s-xl.jpg/_jcr_content/renditions/original.image_file.1440.450.file/vitocal-200-s-xl.jpg";

const titleCard1 = "What is Viessmann";
const textCard1 =
  "The Viessmann Group is a leading international manufacturer of heating, industrial and cooling systems. Viessmann's comprehensive range offers individual solutions with efficient systems from 1.5 to 120,000 kilowatts for all areas of application and all energy carriers.";
const titleCard2 = "The Vitocal 100-S heat pump in split version";
const textCard2 =
  "It has an energy efficiency class of A++/A+ and is cost-effective. It boasts low running costs thanks to its high COP (according to EN 14511: 4.4 to 4.8 - air 7°C/water 35°C). The reversible version enables both heating and cooling (AC variant). Equipped with the user-friendly Vitotronic control unit featuring a text and graphic display, it offers easy operation. It can be mounted either standing or hanging and has the capability to utilize electricity from a photovoltaic installation.";
const titleCard3 = "VITOCAL 200-S";
const textCard3 =
  "Reliable, compact and more environmentally friendly than ever before – the new generation of Viessmann heat pumps uses ambient heat for heating and cooling extremely efficiently. With a flow temperature of up to 60 °C, the Vitocal 200-S heat pump is the ideal solution for energy-efficient new construction. Its high energy efficiency, convenient application operation, sustainable operation and attractive design are impressive.";

const ItemCards = () => {
  return (
    <Container>
      <div className="row mt-5 itemCards">
        <div className="col">
          <ItemCard
            image={img1}
            title={titleCard1}
            text={textCard1}
            extLink="https://www.viessmann.family/"
          />
        </div>
        <div className="col ">
          <ItemCard
            image={img2}
            title={titleCard2}
            text={textCard2}
            extLink="https://www.viessmann.pl/pl/budynki-mieszkalne/pompy-ciepla/pompy-ciepla-powietrzewoda-w-wersji-split/vitocal-100s.html"
          />
        </div>
        <div className="col ">
          <ItemCard
            image={img3}
            title={titleCard3}
            text={textCard3}
            extLink="https://www.viessmann.pl/pl/budynki-mieszkalne/pompy-ciepla/pompy-ciepla-powietrzewoda-w-wersji-split/vitocal-200-s-r32.html"
          />
        </div>
      </div>
    </Container>
  );
};

export default ItemCards;
