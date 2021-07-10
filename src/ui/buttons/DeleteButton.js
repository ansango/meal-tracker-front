import { BaseButton } from "./BaseButton";

export const DeleteButton = ({ onClick }) => (
  <BaseButton onClick={onClick}>
    <span>x</span>
  </BaseButton>
);
