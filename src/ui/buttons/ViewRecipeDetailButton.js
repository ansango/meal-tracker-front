import { Link } from "react-router-dom";
import { DetailIcon } from "../icons";
import { BaseButton } from "./BaseButton";

export const ViewRecipeDetailButton = ({ url }) => (
  <Link to={`${url}`}>
    <BaseButton>
      <DetailIcon size={20} />
    </BaseButton>
  </Link>
);
