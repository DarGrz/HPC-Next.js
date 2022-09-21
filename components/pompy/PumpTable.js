import React from "react";
import Image from "next/image";
import classes from "./PumpTable.module.css";

const PumpTable = (props) => {
  return (
    <>
      <tr>
        <th></th>
        <td>
          <div className={classes.image}>
            <Image
              src={props.pump.image}
              layout="fill"
              alt={props.pump.brand}
            />
          </div>
        </td>
        <td>
          {props.pumpB ? (
            <div className={classes.image}>
              <Image
                src={props.pumpB.image}
                layout="fill"
                alt={props.pumpB.brand}
              />
            </div>
          ) : (
            <div className={classes.image}>
              <Image
                src="https://fundacja-sprzymierzeni.pl/wp-content/uploads/2021/04/no-image-1.jpg"
                layout="fill"
                alt="no image"
              />
            </div>
          )}
        </td>
      </tr>
      <tr>
        <th colSpan={3}>Specification</th>
      </tr>
      <tr>
        <th>Brand</th>
        <td>{props.pump.brand}</td>
        <td>{props.pumpB.brand}</td>
      </tr>
      <tr>
        <th>Model</th>
        <td>{props.pump.model}</td>
        <td>{props.pumpB.model}</td>
      </tr>
      <tr>
        <th>Product number</th>
        <td>{props.pump.serial}</td>
        <td>{props.pumpB.serial}</td>
      </tr>
      <tr>
        <th>Power (kW)</th>
        <td>{props.pump.power}</td>
        <td>{props.pumpB.power}</td>
      </tr>
      <tr>
        <th>Type</th>
        <td>{props.pump.type}</td>
        <td>{props.pumpB.type}</td>
      </tr>
      <tr>
        <th>Dimensions</th>
        <td>
          {props.pump.width}x{props.pump.height}x{props.pump.depth}{" "}
        </td>
        <td>
          {props.pumpB.width}x{props.pumpB.height}x{props.pumpB.depth}{" "}
        </td>
      </tr>
      <tr>
        <th>Weight (kg)</th>
        <td>{props.pump.weight}</td>
        <td>{props.pumpB.weight}</td>
      </tr>
      <tr>
        <th>Power supply</th>
        <td>
          {props.pump.phase}F | {props.pump.voltage}(V) | {props.pump.cycle}(Hz)
        </td>
        <td>
          {props.pumpB.phase}F | {props.pumpB.voltage}(V) | {props.pumpB.cycle}
          (Hz)
        </td>
      </tr>
      <tr>
        <th>Breaker (A)</th>
        <td>{props.pump.breaker}</td>
        <td>{props.pumpB.breaker}</td>
      </tr>
      <tr>
        <th>Refrigerant</th>
        <td>{props.pump.refrigerant}</td>
        <td>{props.pumpB.refrigerant}</td>
      </tr>
      <tr>
        <th>Refrigerant quantity (kg)</th>
        <td>{props.pump.refrigerantQuantity}</td>
        <td>{props.pumpB.refrigerantQuantity}</td>
      </tr>
      <tr>
        <th>Heating range</th>
        <td>{props.pump.heatingRange}</td>
        <td>{props.pumpB.heatingRange}</td>
      </tr>
      <tr>
        <th>DWH range</th>
        <td>{props.pump.dwhRange}</td>
        <td>{props.pumpB.dwhRange}</td>
      </tr>
      <tr>
        <th>Cooling range</th>
        <td>{props.pump.coolingRange}</td>
        <td>{props.pumpB.coolingRange}</td>
      </tr>
      <tr>
        <th>Heating noise level</th>
        <td>{props.pump.heatingNoiseLevel}</td>
        <td>{props.pumpB.heatingNoiseLevel}</td>
      </tr>
      <tr>
        <th>Cooling noise level</th>
        <td>{props.pump.coolingNoiseLevel}</td>
        <td>{props.pumpB.coolingNoiseLevel}</td>
      </tr>
      <tr>
        <th>Description</th>
        <td>{props.pump.description}</td>
        <td>{props.pumpB.description}</td>
      </tr>
    </>
  );
};

export default PumpTable;
