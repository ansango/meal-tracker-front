import { BaseButton } from "./BaseButton";

export const SearchButton = ({ onClick }) => (
  <BaseButton onClick={onClick}>
    <span>Buscar</span>
  </BaseButton>
);
