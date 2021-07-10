import { Link } from "react-router-dom";
import { BaseButton } from "./BaseButton";

export const ShoppingListButton = () => (
  <Link to="/shopping-list">
    <BaseButton>
      <span>Lista</span>
    </BaseButton>
  </Link>
);
