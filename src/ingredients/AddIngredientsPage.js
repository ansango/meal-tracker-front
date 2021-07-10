import { useState } from "react";
import { useHistory } from "react-router";
import { BackButton, Dropdown } from "../ui";

const unitOptions = ["kg", "g", "mg"];

export const AddIngredientsPage = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [units, setUnits] = useState(unitOptions[1]);
  const history = useHistory();

  const addToIngredients = async () => {
    const newIngredient = {
      name: name.toLowerCase(),
      amount,
      units,
    };
    await fetch("/ingredients", {
      method: "post",
      body: JSON.stringify(newIngredient),
      headers: { "Content-Type": "application/json" },
    });
    history.push("/");
  };

  return (
    <div className="page">
      <BackButton />
      <div className="centered-container">
        <h1>Add Ingredient</h1>
        <input
          type="text"
          placeholder="Enter ingredient name"
          className="space-after space-before full-width"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          className="space-before full-width"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <Dropdown
          className="space-before full-width"
          value={units}
          onChange={(event) => setUnits(event.target.value)}
          options={unitOptions}
        ></Dropdown>
        <button className="space-before full-width" onClick={addToIngredients}>
          Add
        </button>
      </div>
    </div>
  );
};
