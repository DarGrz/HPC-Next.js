import React from "react";
import classes from "./PumpTable.module.css";
import { Container } from "react-bootstrap";

const PumpTable = (props) => {
  return (
    <>
      <Container className={classes.pumpTable_container}>
        <div className="row align-items-center">
          <div className="col">
            <img
              className="w-100"
              src={props.pump.image}
              alt={props.pump.brand}
            />
          </div>

          <div className="col">
            <img
              className="w-100"
              src={props.pumpB.image}
              alt={props.pumpB.brand}
            />
          </div>
        </div>
        <div className="text-center  fw-bolder text-uppercase bg-dark text-light pt-2 pb-2 ">
          Specification
        </div>
        <div className="row mt-2 border-bottom">
          <div className="col">{props.pump.brand}</div>
          <div
            className="col fw-light text-center "
            style={{ fontSize: "14px" }}
          >
            Brand
          </div>
          <div className="col text-end">{props.pumpB.brand}</div>
        </div>
        <div className="row mt-2 border-bottom">
          <div className="col">{props.pump.model}</div>
          <div
            className="col fw-light text-center"
            style={{ fontSize: "14px" }}
          >
            Model
          </div>
          <div className="col text-end">{props.pumpB.model}</div>
        </div>
        <div className="row mt-2 border-bottom">
          <div className="col ">{props.pump.serial}</div>
          <div
            className="col fw-light text-center"
            style={{ fontSize: "14px" }}
          >
            Model number
          </div>
          <div className="col text-end">{props.pumpB.serial}</div>
        </div>
        <div className="row mt-2 border-bottom">
          <div className="col ">{props.pump.power}</div>
          <div
            className="col fw-light text-center"
            style={{ fontSize: "14px" }}
          >
            Power (kW)
          </div>
          <div className="col text-end">{props.pumpB.power}</div>
        </div>
        <div className="row mt-2 border-bottom">
          <div className="col ">{props.pump.type}</div>
          <div
            className="col fw-light text-center"
            style={{ fontSize: "14px" }}
          >
            Type
          </div>
          <div className="col text-end">{props.pumpB.type}</div>
        </div>
        <div className="row mt-2 border-bottom">
          <div className="col ">
            {" "}
            {props.pump.width}x{props.pump.height}x{props.pump.depth}
          </div>
          <div
            className="col fw-light text-center"
            style={{ fontSize: "14px" }}
          >
            Dimensions w/h/d (mm)
          </div>
          <div className="col text-end">
            {" "}
            {props.pumpB.width}x{props.pumpB.height}x{props.pumpB.depth}
          </div>
        </div>
        <div className="row mt-2 border-bottom">
          <div className="col ">{props.pump.weight}</div>
          <div
            className="col fw-light text-center"
            style={{ fontSize: "14px" }}
          >
            Weight (kg)
          </div>
          <div className="col text-end">{props.pumpB.weight}</div>
        </div>
        <div className="row mt-2 border-bottom">
          <div className="col ">
            {props.pump.phase}F | {props.pump.voltage}(V) | {props.pump.cycle}
            (Hz)
          </div>
          <div
            className="col fw-light text-center"
            style={{ fontSize: "14px" }}
          >
            Power supply f/V/Hz
          </div>
          <div className="col text-end">
            {props.pumpB.phase}F | {props.pumpB.voltage}(V) |{" "}
            {props.pumpB.cycle}(Hz)
          </div>
        </div>
      </Container>
    </>

    // <div>
    //   <tr>
    //     <th></th>
    //     <td className={classes.pumpImages}>
    //       <img src={props.pump.image} alt={props.pump.brand} />
    //     </td>
    //     <td>
    //       {props.pumpB ? (
    //         <img src={props.pumpB.image} alt={props.pumpB.brand} />
    //       ) : (
    //         <img
    //           src="https://fundacja-sprzymierzeni.pl/wp-content/uploads/2021/04/no-image-1.jpg"
    //           alt="no image"
    //         />
    //       )}
    //     </td>
    //   </tr>
    //   <tr className={classes.headerTableText}>
    //     <th colSpan={3}>Specification</th>
    //   </tr>
    //   <tr>
    //     <th>Brand</th>
    //     <td>{props.pump.brand}</td>
    //     <td>{props.pumpB.brand}</td>
    //   </tr>
    //   <tr>
    //     <th>Model</th>
    //     <td>{props.pump.model}</td>
    //     <td>{props.pumpB.model}</td>
    //   </tr>
    //   <tr>
    //     <th>Product number</th>
    //     <td>{props.pump.serial}</td>
    //     <td>{props.pumpB.serial}</td>
    //   </tr>
    //   <tr>
    //     <th>Power (kW)</th>
    //     <td>{props.pump.power}</td>
    //     <td>{props.pumpB.power}</td>
    //   </tr>
    //   <tr>
    //     <th>Type</th>
    //     <td>{props.pump.type}</td>
    //     <td>{props.pumpB.type}</td>
    //   </tr>
    //   <tr>
    //     <th>Dimensions</th>
    //     <td>
    //       {props.pump.width}x{props.pump.height}x{props.pump.depth}
    //     </td>
    //     <td>
    //       {props.pumpB && (
    //         <div>
    //           {props.pumpB.width}x{props.pumpB.height}x{props.pumpB.depth}
    //         </div>
    //       )}
    //     </td>
    //   </tr>
    //   <tr>
    //     <th>Weight (kg)</th>
    //     <td>{props.pump.weight}</td>
    //     <td>{props.pumpB.weight}</td>
    //   </tr>
    //   <tr>
    //     <th>Power supply</th>
    //     <td>
    //       {props.pump.phase}F | {props.pump.voltage}(V) | {props.pump.cycle}(Hz)
    //     </td>
    //     <td>
    //       {props.pumpB && (
    //         <div>
    //           {props.pumpB.phase}F | {props.pumpB.voltage}(V) |{" "}
    //           {props.pumpB.cycle}
    //           (Hz)
    //         </div>
    //       )}
    //     </td>
    //   </tr>
    //   <tr>
    //     <th>Breaker (A)</th>
    //     <td>{props.pump.breaker}</td>
    //     <td>{props.pumpB.breaker}</td>
    //   </tr>
    //   <tr>
    //     <th>Refrigerant</th>
    //     <td>{props.pump.refrigerant}</td>
    //     <td>{props.pumpB.refrigerant}</td>
    //   </tr>
    //   <tr>
    //     <th>Refrigerant quantity (kg)</th>
    //     <td>{props.pump.refrigerantQuantity}</td>
    //     <td>{props.pumpB.refrigerantQuantity}</td>
    //   </tr>
    //   <tr>
    //     <th>Heating range</th>
    //     <td>{props.pump.heatingRange}</td>
    //     <td>{props.pumpB.heatingRange}</td>
    //   </tr>
    //   <tr>
    //     <th>DWH range</th>
    //     <td>{props.pump.dwhRange}</td>
    //     <td>{props.pumpB.dwhRange}</td>
    //   </tr>
    //   <tr>
    //     <th>Cooling range</th>
    //     <td>{props.pump.coolingRange}</td>
    //     <td>{props.pumpB.coolingRange}</td>
    //   </tr>
    //   <tr>
    //     <th>Heating noise level</th>
    //     <td>{props.pump.heatingNoiseLevel}</td>
    //     <td>{props.pumpB.heatingNoiseLevel}</td>
    //   </tr>
    //   <tr>
    //     <th>Cooling noise level</th>
    //     <td>{props.pump.coolingNoiseLevel}</td>
    //     <td>{props.pumpB.coolingNoiseLevel}</td>
    //   </tr>
    //   <tr>
    //     <th>Description</th>
    //     <td>{props.pump.description}</td>
    //     <td>{props.pumpB.description}</td>
    //   </tr>
    // </div>
  );
};

export default PumpTable;
