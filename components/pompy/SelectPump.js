import React, { useState } from "react";
import Select from "react-select";
import PumpTable from "./PumpTable";

const SelectPumps = (props) => {
  const [pump, setPump] = useState("");
  const [pumpB, setPumpB] = useState("");

  const onSelectPump = (e) => {
    const selectedId = e.id;
    const selectedPump = Products.filter((d) => d.id == selectedId)[0];
    setPump(selectedPump);
  };
  const onSelectPumpB = (e) => {
    const selectedId = e.id;
    const selectedPump = Products.filter((d) => d.id == selectedId)[0];
    setPumpB(selectedPump);
  };

  const Products = props.products;

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
          ` ${option.producent} ${option.model} ${option.power} kW`
        }
        getOptionValue={(option) => `${option.id}`}
        options={Products}
      />
      <Select
        onChange={(e) => {
          onSelectPumpB(e);
        }}
        instanceId="long-value-select"
        className="select1"
        placeholder="(B) Wybierz pompę ciepła..."
        getOptionLabel={(option) =>
          ` ${option.producent} ${option.model} ${option.power} kW`
        }
        getOptionValue={(option) => `${option.id}`}
        options={Products}
      />
      <PumpTable pump={pump} pumpB={pumpB} />
    </>
  );
};

export default SelectPumps;
