import React from "react";
import { BsFillArrowUpCircleFill, BsJustify } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

// arrow icons colors
const red = { color: "red", fontSize: "16px" };
const green = { color: "green", fontSize: "16px" };

const SpecificationElement = (props) => {
  console.log(props.arrow);
  console.log(props.arrowB);

  //arrow show trigger
  let trigger = props.arrow;
  let triggerB = props.arrowB;

  if (trigger > triggerB) {
    trigger = false;
  }

  // Power arrow
  const powerArrow =
    props.arrow &&
    (!trigger ? (
      <BsFillArrowUpCircleFill style={green} />
    ) : (
      <BsFillArrowDownCircleFill style={red} />
    ));
  const powerArrowB =
    props.arrowB &&
    (trigger ? (
      <BsFillArrowUpCircleFill style={green} />
    ) : (
      <BsFillArrowDownCircleFill style={red} />
    ));

  // Weight arrow
  const weightArrow =
    props.weight &&
    (trigger ? (
      <BsFillArrowUpCircleFill style={green} />
    ) : (
      <BsFillArrowDownCircleFill style={red} />
    ));
  const weightArrowB =
    props.weightB &&
    (!trigger ? (
      <BsFillArrowUpCircleFill style={green} />
    ) : (
      <BsFillArrowDownCircleFill style={red} />
    ));

  return (
    <div className="row  border-bottom px-2 ">
      <div className="col" style={{ display: "flex", alignItems: "center" }}>
        {props.pump}{" "}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "10px",
          }}
        >
          {powerArrow} {weightArrow}
        </div>
      </div>
      <div className="col fw-light text-center " style={{ fontSize: "14px" }}>
        {props.name}
      </div>
      <div
        className="col"
        style={{ display: "flex", alignItems: "center", justifyContent: "end" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "10px",
          }}
        >
          {powerArrowB} {weightArrowB}
        </div>
        {props.pumpB}
      </div>
    </div>
  );
};

export default SpecificationElement;
