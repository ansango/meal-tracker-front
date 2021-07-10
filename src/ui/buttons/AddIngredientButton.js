import { Link } from "react-router-dom";
import { BaseButton } from "./BaseButton";

export const AddIngredientButton = () => (
  <Link to="/add-ingredient">
    <BaseButton>
      <span>Añadir Ingrediente</span>
    </BaseButton>
  </Link>
);
