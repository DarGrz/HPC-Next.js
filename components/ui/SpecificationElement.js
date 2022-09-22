import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const SpecificationElement = (props) => {
  console.log(props);
  return (
    <div className="row mt-2 border-bottom px-2">
      <div className="col">
        {props.pump} {props.arrow && <BsFillArrowUpCircleFill />}
      </div>
      <div className="col fw-light text-center " style={{ fontSize: "14px" }}>
        {props.name}
      </div>
      <div className="col  text-end">
        {props.arrow && <BsFillArrowDownCircleFill />} {props.pumpB}
      </div>
    </div>
  );
};

export default SpecificationElement;
