import React from "react";

const SpecificationElement = (props) => {
  return (
    <div className="row mt-2 border-bottom px-2">
      <div className="col">{props.pump}</div>
      <div className="col fw-light text-center " style={{ fontSize: "14px" }}>
        {props.name}
      </div>
      <div className="col text-end">{props.pumpB}</div>
    </div>
  );
};

export default SpecificationElement;
