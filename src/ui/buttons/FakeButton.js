import { InfoIcon } from "../icons";
import { BaseButton } from "./BaseButton";

export const FakeButton = () => (
  <BaseButton
    text={"yellow-800"}
    darkText={"yellow-300"}
    color={"yellow-200"}
    darkColor={"yellow-800"}
  >
    <InfoIcon size={20} />
  </BaseButton>
);
