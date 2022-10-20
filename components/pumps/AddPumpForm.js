import React from "react";
import { useRef } from "react";
import classes from "./AddPumpForm.module.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const AddPumpForm = (props) => {
  const imageInputRef = useRef();
  const brandInputRef = useRef();
  const modelInputRef = useRef();
  const serialInputRef = useRef();
  const powerInputRef = useRef();
  const typeInputRef = useRef();
  const descriptionInputRef = useRef();
  const widthInputRef = useRef();
  const heightInputRef = useRef();
  const depthInputRef = useRef();
  const weightInputRef = useRef();
  const phaseInputRef = useRef();
  const cycleInputRef = useRef();
  const voltageInputRef = useRef();
  const breakerInputRef = useRef();
  const noiseLevelHetingInputRef = useRef();
  const coolingNoiseLevelInputRef = useRef();
  const refrigerantInputRef = useRef();
  const refrigerantQuantityInputRef = useRef();
  const heatingInputRef = useRef();
  const dwhInputRef = useRef();
  const coolingInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredBrand = brandInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredModel = modelInputRef.current.value;
    const enteredSerial = serialInputRef.current.value;
    const enteredPower = powerInputRef.current.value;
    const enteredType = typeInputRef.current.value;
    const enteredWidth = widthInputRef.current.value;
    const enteredHeight = heightInputRef.current.value;
    const enteredDepth = depthInputRef.current.value;
    const enteredWeight = weightInputRef.current.value;
    const enteredPhase = phaseInputRef.current.value;
    const enteredCycle = cycleInputRef.current.value;
    const enteredVoltage = voltageInputRef.current.value;
    const enteredBreaker = breakerInputRef.current.value;
    const enteredNoiseLevelHeting = noiseLevelHetingInputRef.current.value;
    const enteredCoolingNoiseLevel = coolingNoiseLevelInputRef.current.value;
    const enteredRefrigerant = refrigerantInputRef.current.value;
    const enteredRefrigerantQuantity =
      refrigerantQuantityInputRef.current.value;
    const enteredHeating = heatingInputRef.current.value;
    const enteredDwh = dwhInputRef.current.value;
    const enteredCooling = coolingInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const pumpData = {
      brand: enteredBrand,
      image: enteredImage,
      model: enteredModel,
      serial: enteredSerial,
      power: enteredPower,
      type: enteredType,
      width: enteredWidth,
      height: enteredHeight,
      depth: enteredDepth,
      weight: enteredWeight,
      phase: enteredPhase,
      cycle: enteredCycle,
      voltage: enteredVoltage,
      breaker: enteredBreaker,
      heatingNoiseLevel: enteredNoiseLevelHeting,
      coolingNoiseLevel: enteredCoolingNoiseLevel,
      refrigerant: enteredRefrigerant,
      refrigerantQuantity: enteredRefrigerantQuantity,
      heatingRange: enteredHeating,
      dwhRange: enteredDwh,
      coolingRange: enteredCooling,
      description: enteredDescription,
    };

    props.onAddPump(pumpData);
  }

  return (
    <Container>
      <Card className={classes.card}>
        <Card.Body>
          <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.control}>
              <label htmlFor="brand">Brand</label>
              <input type="text" required id="brand" ref={brandInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="image">Pump Image</label>
              <input type="url" required id="image" ref={imageInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="model">Model</label>
              <input type="text" required id="model" ref={modelInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="serial">Product number</label>
              <input type="text" required id="serial" ref={serialInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="power">Power in kW</label>
              <input type="number" required id="power" ref={powerInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="type">Type</label>
              <select type="text" required id="type" ref={typeInputRef}>
                <option></option>
                <option value="Split">Split</option>
                <option value="Monoblok">Monoblok</option>
              </select>
            </div>
            <div className={classes.control}>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                required
                rows="5"
                ref={descriptionInputRef}
              ></textarea>
            </div>

            <div className={classes.control}>
              <label>Dimensions</label>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input
                  type="number"
                  required
                  id="height"
                  ref={heightInputRef}
                  placeholder="Height (cm)"
                  style={{ width: "20%" }}
                />
                <input
                  type="number"
                  required
                  id="width"
                  ref={widthInputRef}
                  placeholder="Width (cm)"
                  style={{ width: "20%" }}
                />
                <input
                  type="number"
                  required
                  id="depth"
                  ref={depthInputRef}
                  placeholder="Depth (cm)"
                  style={{ width: "20%" }}
                />
                <input
                  type="number"
                  required
                  id="weight"
                  ref={weightInputRef}
                  placeholder="Weight (kg)"
                  style={{ width: "20%" }}
                />
              </div>
              <div className={classes.control}>
                <label>Power supply</label>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <input
                    type="number"
                    required
                    id="phase"
                    ref={phaseInputRef}
                    placeholder="Phase 1 or 3"
                    style={{ width: "20%" }}
                  />
                  <input
                    type="number"
                    required
                    id="cycle"
                    ref={cycleInputRef}
                    placeholder="Cycle (Hz)"
                    style={{ width: "20%" }}
                  />
                  <input
                    type="number"
                    required
                    id="voltage"
                    ref={voltageInputRef}
                    placeholder="Voltage (V)"
                    style={{ width: "20%" }}
                  />
                  <input
                    type="number"
                    required
                    id="breaker"
                    ref={breakerInputRef}
                    placeholder="Breaker size (A)"
                    style={{ width: "20%" }}
                  />
                </div>
              </div>
            </div>
            <div className={classes.control}>
              <label>Noise level</label>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input
                  type="text"
                  required
                  id="noiseLevelHeting"
                  ref={noiseLevelHetingInputRef}
                  placeholder="Heating noise level dB(A)"
                  style={{ width: "45%" }}
                />
                <input
                  type="text"
                  required
                  id="coolingNoiseLevel"
                  ref={coolingNoiseLevelInputRef}
                  placeholder="Cooling noise level dB(A)"
                  style={{ width: "45%" }}
                />
              </div>
            </div>
            <div className={classes.control}>
              <label htmlFor="refrigerant">Refrigerant</label>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input
                  type="text"
                  required
                  id="refrigerant"
                  placeholder="Refrigerant name"
                  ref={refrigerantInputRef}
                  style={{ width: "45%" }}
                />
                <input
                  type="text"
                  required
                  id="quantity"
                  placeholder="Quantity (kg)"
                  ref={refrigerantQuantityInputRef}
                  style={{ width: "45%" }}
                />
              </div>
            </div>
            <div className={classes.control}>
              <label>Guaranteed operating range (Outdoor)</label>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input
                  type="text"
                  required
                  id="heating"
                  ref={heatingInputRef}
                  placeholder="Heating (C)"
                  style={{ width: "30%" }}
                />
                <input
                  type="text"
                  required
                  id="dwh"
                  ref={dwhInputRef}
                  placeholder="DWH (C)"
                  style={{ width: "30%" }}
                />
                <input
                  type="text"
                  required
                  id="Cooling"
                  ref={coolingInputRef}
                  placeholder="Cooling (C)"
                  style={{ width: "30%" }}
                />
              </div>
            </div>
            <div className={classes.actions}>
              <button>Add Pump</button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddPumpForm;
