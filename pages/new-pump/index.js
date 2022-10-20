import { useRouter } from "next/router";
import React from "react";
import AddPumpForm from "../../components/pumps/AddPumpForm";

const AddPumpPage = () => {
  const router = useRouter();
  async function addPumpHandler(enteredPumpData) {
    const response = await fetch("/api/new-pump", {
      method: "POST",
      body: JSON.stringify(enteredPumpData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.push("/");
  }

  return <AddPumpForm onAddPump={addPumpHandler} />;
};

export default AddPumpPage;
