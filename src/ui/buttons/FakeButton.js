import { InfoIcon } from "../icons";
import { BaseButton } from "./BaseButton";

export const FakeButton = () => (
  <BaseButton type={"warning"}>
    <InfoIcon size={20} />
  </BaseButton>
);
