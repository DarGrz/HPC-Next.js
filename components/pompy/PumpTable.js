import React from "react";
import { Container } from "react-bootstrap";
import SpecificationElement from "../ui/SpecificationElement";

const PumpTable = (props) => {
  return (
    <>
      <Container className="w-100">
        <div className="row" style={{ margin: "auto" }}>
          <div className="col d-flex justify-content-center p-0">
            <img
              style={{ objectFit: "cover", width: "70%", padding: "0px" }}
              className=""
              src={props.pump.image}
            />
          </div>

          <div className="col-2 d-flex justify-content-center align-content-center m-auto p-0">
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                maxHeight: "125px",
                padding: "0px",
              }}
              className=""
              src="https://us.123rf.com/450wm/avectors/avectors1803/avectors180300017/97585764-vs-versus-litery-wektor-ikona-na-bia%C5%82ym-tle-vs-a-symbol-koncepcji-projektu-konfrontacji-lub-opozycji.jpg?ver=6"
            />
          </div>

          <div className="col d-flex justify-content-center p-0">
            {props.pumpB && (
              <img
                style={{ objectFit: "cover", width: "70%" }}
                className=""
                src={props.pumpB.image}
              />
            )}
          </div>
        </div>
        <div className="text-center  fw-bolder text-uppercase bg-dark text-light pt-2 pb-2">
          Specification
        </div>
        <SpecificationElement
          name={"Brand"}
          pump={props.pump.brand}
          pumpB={props.pumpB.brand}
        />
        <SpecificationElement
          name={"Model"}
          pump={props.pump.model}
          pumpB={props.pumpB.model}
        />
        <SpecificationElement
          name={"Model number"}
          pump={props.pump.serial}
          pumpB={props.pumpB.serial}
        />
        <SpecificationElement
          name={"Power (kW)"}
          pump={props.pump.power}
          pumpB={props.pumpB.power}
        />
        <SpecificationElement
          name={"Type"}
          pump={props.pump.type}
          pumpB={props.pumpB.type}
        />
        <div className="row mt-2 border-bottom px-2">
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
            {props.pumpB && (
              <div>
                {props.pumpB.width}x{props.pumpB.height}x{props.pumpB.depth}
              </div>
            )}
          </div>
        </div>
        <SpecificationElement
          name={"Weight (kg)"}
          pump={props.pump.weight}
          pumpB={props.pumpB.weight}
        />
        <div className="row mt-2 border-bottom px-2">
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
            {props.pumpB && (
              <div>
                {props.pumpB.phase}F | {props.pumpB.voltage}(V) |{" "}
                {props.pumpB.cycle}(Hz)
              </div>
            )}
          </div>
        </div>

        <SpecificationElement
          name={"Breaker"}
          pump={props.pump.breaker}
          pumpB={props.pumpB.breaker}
        />
        <SpecificationElement
          name={"Refrigerant"}
          pump={props.pump.refrigerant}
          pumpB={props.pumpB.refrigerant}
        />
        <SpecificationElement
          name={"Refrigerant quantity (kg)"}
          pump={props.pump.refrigerantQuantity}
          pumpB={props.pumpB.refrigerantQuantity}
        />
        <SpecificationElement
          name={"Heating range"}
          pump={props.pump.heatingRange}
          pumpB={props.pumpB.heatingRange}
        />
        <SpecificationElement
          name={"DWH range"}
          pump={props.pump.dwhRange}
          pumpB={props.pumpB.dwhRange}
        />
        <SpecificationElement
          name={"Cooling range"}
          pump={props.pump.coolingRange}
          pumpB={props.pumpB.coolingRange}
        />
        <SpecificationElement
          name={"Heating noise (dB)"}
          pump={props.pump.heatingNoiseLevel}
          pumpB={props.pumpB.heatingNoiseLevel}
        />
        {/* <SpecificationElement
          name={"Description"}
          pump={props.pump.description}
          pumpB={props.pumpB.description}
        /> */}
      </Container>
    </>
  );
};

export default PumpTable;
