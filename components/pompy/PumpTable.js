import React from "react";

const PumpTable = (props) => {
  return (
    <div>
      {props.pump.producent} {props.pump.model} {props.pump.power}{" "}
      {props.pump.description}
      {props.pumpB.producent} {props.pumpB.model} {props.pumpB.power}{" "}
      {props.pumpB.description}
    </div>
  );
};

export default PumpTable;
