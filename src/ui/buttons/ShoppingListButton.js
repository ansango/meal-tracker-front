import { Link } from "react-router-dom";
import { ShoppingIcon } from "../icons";
import { BaseButton } from "./BaseButton";

export const ShoppingListButton = () => (
  <Link to="/shopping-list">
    <BaseButton color={"white"} darkColor={"gray-900"}>
      <ShoppingIcon size={20} className="text-blue-900 dark:text-blue-200" />
    </BaseButton>
  </Link>
);
