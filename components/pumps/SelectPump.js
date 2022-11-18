import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Select from "react-select";
import PumpTable from "./PumpTable";
import Baner from "../layout/Baner";

const SelectPumps = (props) => {
  const [pump, setPump] = useState("");
  const [pumpB, setPumpB] = useState("");

  useEffect(() => {
    setPump(Products.filter((d) => d.id == "632b651282a8ccfbedf5752f")[0]);
    setPumpB(Products.filter((d) => d.id == "632b6d0882a8ccfbedf57531")[0]);
  }, []);

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

  const banerColor = {
    backgroundColor: "#212529",
  };

  return (
    <>
      <Baner />
      <Container style={banerColor} className="py-3 my-md-3 my-sm-3 ">
        <div className="text-center mb-3 fw-bold text-uppercase ">
          <div style={{ color: "#fff" }}>Compare heat pumps!</div>
        </div>
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
