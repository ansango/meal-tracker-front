import { Link } from "react-router-dom";
import { AddIcon } from "../icons";
import { BaseButton } from "./BaseButton";

export const AddIngredientButton = () => (
  <Link to="/add-ingredient">
    <BaseButton
      text={"blue-800"}
      darkText={"blue-300"}
      color={"blue-200"}
      darkColor={"blue-900"}
    >
      <AddIcon size={20} />
    </BaseButton>
  </Link>
);

export const PostIngredientButton = ({ onClick }) => (
  <BaseButton onClick={onClick}>
    <span>Añadir Ingrediente</span>
  </BaseButton>
);
