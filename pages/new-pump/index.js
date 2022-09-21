import React from "react";
import AddPumpForm from "../../components/pompy/AddPumpForm";

const AddPumpPage = () => {
  async function addPumpHandler(enteredPumpData) {
    const response = await fetch("/api/new-pump", {
      method: "POST",
      body: JSON.stringify(enteredPumpData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return <AddPumpForm onAddPump={addPumpHandler} />;
};

export default AddPumpPage;
