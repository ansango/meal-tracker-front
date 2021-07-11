import { Link } from "react-router-dom";
import { AddIcon } from "../icons";
import { BaseButton } from "./BaseButton";

export const AddMealButton = ({ url }) => (
  <Link to={url}>
    <BaseButton type={"success"}>
      <AddIcon size={20} />
    </BaseButton>
  </Link>
);
