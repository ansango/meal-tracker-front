import { RemoveIcon } from "../icons";
import { BaseButton } from "./BaseButton";

export const DeleteButton = ({ onClick }) => (
  <BaseButton
    onClick={onClick}
    text={"red-800"}
    darkText={"red-300"}
    color={"red-200"}
    darkColor={"red-900"}
  >
    <RemoveIcon size={20} />
  </BaseButton>
);
