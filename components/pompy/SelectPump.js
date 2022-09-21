import React, { useState } from "react";
import Select from "react-select";
import PumpTable from "./PumpTable";

const SelectPumps = (props) => {
  const [pump, setPump] = useState("");

  const onSelectPump = (e) => {
    const selectedId = e.id;
    const selectedPump = Products.filter((d) => d.id == selectedId)[0];
    setPump(selectedPump);
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
          ` ${option.producent} ${option.models} ${option.power} kW ${option.pn}`
        }
        getOptionValue={(option) => `${option.id}`}
        options={Products}
      />
      <PumpTable pump={pump} />
    </>
  );
};

export default SelectPumps;
