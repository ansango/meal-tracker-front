import { Link } from "react-router-dom";
import { AddIcon } from "../icons";
import { BaseButton } from "./BaseButton";

export const AddMealButton = ({ url }) => (
  <Link to={url}>
    <BaseButton
      text={"green-800"}
      darkText={"green-300"}
      color={"green-200"}
      darkColor={"green-900"}
    >
      <AddIcon size={20} />
    </BaseButton>
  </Link>
);
