import { Link } from "react-router-dom";
import { BaseButton } from "./BaseButton";

export const AddMealButton = ({ url }) => (
  <Link to={url}>
    <BaseButton>
      <span>Añadir</span>
    </BaseButton>
  </Link>
);
