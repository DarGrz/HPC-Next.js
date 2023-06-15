import { Container } from "react-bootstrap";
import React from "react";
import ItemCard from "./ItemCard";

const img1 =
  "https://www.vaillant.com/media-master/global-media/vaillant/product-pictures/arotherm-plus-2019/b2c/hp19-309009-03-1587831-format-16-9@392@desktop.jpg";
const img2 =
  "https://www.vaillant.com/media-master/global-media/vaillant/product-pictures/arotherm-plus-2019/b2c/hp19-309009-03-1587831-format-16-9@392@desktop.jpg";
const img3 =
  "https://www.vaillant.com/media-master/global-media/vaillant/product-pictures/emotion/hp12-1328-01-44489-format-16-9@392@desktop.jpg";

const titleCard1 = "What is Vaillant";
const textCard1 =
  "More than 140 years have passed since Johann Vaillant founded his master-craftsman installation business in a small half-timbered house in Remscheid/Germany. What began in 1874 is now a company with more than 12,000 employees and a globally leading provider of sustainable and responsible system solutions and services for heating cooling and hot water.";
const titleCard2 = "Air-to-water heat pump system aroTHERM plus";
const textCard2 =
  "Environmentally friendly and future-proof, thanks to the most cutting-edge heat pump technology with natural refrigerant, reducing your carbon footprint. Natural refrigerant for the respect of the environment. Hot water up to 70 °C.";
const titleCard3 = "aroTHERM 5, 8, 11 and 15 kW";
const textCard3 =
  "The most compact heating and acclimatization renewable system, with a power output of 5, 8 kW (single phase), 11 and 15 kW (tri phase). Reversible system for heating, dhw generation, and also active cooling. System consisting of a heat pump to be installed outdoors and a hydraulic unit indoor, ideal for the efficient enlargement of an existing heating system to become a hybrid system.";

const ItemCards = () => {
  return (
    <Container>
      <div className="row mt-5 itemCards">
        <div className="col">
          <ItemCard
            image={img1}
            title={titleCard1}
            text={textCard1}
            extLink="https://www.vaillant.com/home/"
          />
        </div>
        <div className="col ">
          <ItemCard
            image={img2}
            title={titleCard2}
            text={textCard2}
            extLink="https://www.vaillant.com/home/products/air-to-water-heat-pump-system-arotherm-plus-12096.html"
          />
        </div>
        <div className="col ">
          <ItemCard
            image={img3}
            title={titleCard3}
            text={textCard3}
            extLink="https://www.vaillant.com/home/products/arotherm-5-8-11-and-15-kw-11025.html"
          />
        </div>
      </div>
    </Container>
  );
};

export default ItemCards;
