import React from "react";

const PumpTable = (props) => {
  return (
    <div>
      {props.pump.producent} {props.pump.pn}
    </div>
  );
};

export default PumpTable;
