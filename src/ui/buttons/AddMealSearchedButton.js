import { CalendarIcon } from "../icons";
import { BaseButton } from "./BaseButton";

export const AddMealSearchedButton = ({ onClick }) => (
  <BaseButton onClick={onClick} type={"success"}>
    <CalendarIcon size={20} />
  </BaseButton>
);
