import { RemoveIcon } from "../icons";
import { BaseButton } from "./BaseButton";

export const DeleteButton = ({ onClick }) => (
  <BaseButton onClick={onClick} type={"danger"}>
    <RemoveIcon size={20} />
  </BaseButton>
);
