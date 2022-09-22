import React, { useState } from "react";
import { Container } from "react-bootstrap";
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
      <Container>
        <div className="row align-items-center col d-md-flex flex-column flex-lg-row  m-auto ">
          <div className="col">
            <Select
              className="mb-2 mb-lg-0"
              onChange={(e) => {
                onSelectPump(e);
              }}
              instanceId="long-value-select"
              placeholder="(A) Choose heat pump..."
              getOptionLabel={(option) =>
                ` ${option.brand} ${option.model} ${option.power} kW`
              }
              getOptionValue={(option) => `${option.id}`}
              options={Products}
            />
          </div>
          <div className="col">
            <Select
              onChange={(e) => {
                onSelectPumpB(e);
              }}
              instanceId="long-value-select"
              placeholder="(B) Choose heat pump..."
              getOptionLabel={(option) =>
                ` ${option.brand} ${option.model} ${option.power} kW`
              }
              getOptionValue={(option) => `${option.id}`}
              options={Products}
            />
          </div>
        </div>
      </Container>
      {pump && <PumpTable pump={pump} pumpB={pumpB} />}
    </>
  );
};

export default SelectPumps;
