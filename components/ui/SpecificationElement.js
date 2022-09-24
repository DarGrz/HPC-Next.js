import React, { useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

// arrow icons colors
const red = { color: "red", fontSize: "16px" };
const green = { color: "green", fontSize: "16px" };

const SpecificationElement = (props) => {
  useEffect(() => {}, [trigger, triggerB]);
  //arrow show trigger
  let trigger = props.arrow;
  let triggerB = props.arrowB;
  let weight;
  let better;

  if (trigger > triggerB) {
    trigger = false;
  } else {
    trigger = true;
  }

  console.log(props.weight, props.weightB);

  if (props.weight > props.weightB) {
    better = "a is better";
    !!weight;
  } else if (props.weight < props.weightB) {
    better = "b is better";
    weight;
  } else {
    better = "equal";
  }

  // Power arrow
  const powerArrow =
    props.arrowB &&
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
  let weightArrow =
    props.weight &&
    (!weight ? (
      <BsFillArrowUpCircleFill style={green} />
    ) : (
      <BsFillArrowDownCircleFill style={red} />
    ));

  const weightArrowB =
    props.weightB &&
    (weight ? (
      <BsFillArrowUpCircleFill style={green} />
    ) : (
      <BsFillArrowDownCircleFill style={red} />
    ));

  return (
    <div className="row  border-bottom px-2 m-auto ">
      <div
        style={{ display: "flex", alignItems: "center" }}
        className="col m-auto fs-md-1"
      >
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
        className="col fs-sm-6 text-right"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          textAlign: "right",
        }}
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
