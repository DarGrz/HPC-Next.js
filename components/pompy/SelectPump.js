import React, { useState } from "react";
import Select from "react-select";
import PumpTable from "./PumpTable";

const Products = [
  {
    id: 0,
    // Cena z montażem
    insprice: "47 500",
    //Cena katalogowa
    catprice: "0000",
    //producent
    producent: "Mitsubishi",
    //model
    models: "Zubadan",
    //numer modelu, seria
    pn: "PUD-SHWM60VAA",
    //moc
    power: "6 ",
    //Roczne zużycie energii [kWh] dla temperatury 55°C
    yearpowusage: "3631.00",
    //rodzaj split, monoblok
    type: "Split",
    //Sprężarka
  },
  {
    id: 1,
    producent: "Mitsubishi",
    models: "Zubadan",
    pn: "PUD-SHWM80VAA",
    power: "8",
    type: "Split",
  },

  {
    id: 2,
    producent: "Mitsubishi",
    models: "Zubadan",
    pn: "PUD-SHWM80YAA",
    power: "8",
    type: "Split",
  },
];

const SelectPumps = (props) => {
  const [pump, setPump] = useState("");

  const onSelectPump = (e) => {
    const selectedId = e.id;
    const selectedPump = Products.filter((d) => d.id == selectedId)[0];
    setPump(selectedPump);
  };

  return (
    <>
      <Select
        onChange={(e) => {
          onSelectPump(e);
        }}
        instanceId="long-value-select"
        className="select1"
        placeholder="(A) Wybierz pompę ciepła..."
        getOptionLabel={(option) =>
          ` ${option.producent} ${option.models} ${option.power} kW ${option.pn}`
        }
        getOptionValue={(option) => `${option.id}`}
        options={Products}
      />
      <PumpTable pump={pump} />
    </>
  );
};

export const getStaticProps = async () => {};

export default SelectPumps;
