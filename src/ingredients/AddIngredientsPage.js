import { route } from "../utils/endpoints";
import { useState } from "react";
import { useHistory } from "react-router";
import {
  BackButton,
  Container,
  InputForm,
  PostIngredientButton,
  SelectForm,
  Title,
} from "../ui";

const unitOptions = ["kg", "g", "mg"];

export const AddIngredientsPage = () => {
  const title = "Añade un ingrediente";
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [units, setUnits] = useState(unitOptions[1]);
  const history = useHistory();

  const addToIngredients = async (e) => {
    e.preventDefault();
    const newIngredient = {
      name: name.toLowerCase(),
      amount,
      units,
    };
    await fetch(`${route.ingredients}`, {
      method: "post",
      body: JSON.stringify(newIngredient),
      headers: { "Content-Type": "application/json" },
    });
    history.push("/");
  };

  return (
    <Container>
      <BackButton />
      <Title title={title} />
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-1 gap-2">
          <InputForm
            type="text"
            placeholder="Nombre del ingrediente"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <InputForm
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          <SelectForm
            value={units}
            onChange={(event) => setUnits(event.target.value)}
            options={unitOptions}
          ></SelectForm>
          <PostIngredientButton onClick={addToIngredients} />
        </div>
      </div>
    </Container>
  );
};
