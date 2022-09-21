import React from "react";
import { useRef } from "react";

const AddPumpForm = (props) => {
  const imageInputRef = useRef();
  const producentInputRef = useRef();
  const modelInputRef = useRef();
  const powerInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredProducent = producentInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredModel = modelInputRef.current.value;
    const enteredPower = powerInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const pumpData = {
      producent: enteredProducent,
      image: enteredImage,
      model: enteredModel,
      power: enteredPower,
      description: enteredDescription,
    };

    props.onAddPump(pumpData);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="producent">Producent</label>
          <input type="text" required id="producent" ref={producentInputRef} />
        </div>
        <div>
          <label htmlFor="image">Pump Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <input type="text" required id="model" ref={modelInputRef} />
        </div>
        <div>
          <label htmlFor="power">Power</label>
          <input type="text" required id="power" ref={powerInputRef} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div>
          <button>Add Pump</button>
        </div>
      </form>
    </>
  );
};

export default AddPumpForm;
