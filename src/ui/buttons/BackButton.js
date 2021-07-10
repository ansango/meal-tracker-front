import { useHistory } from "react-router-dom";
import { BaseButton } from "./BaseButton";

export const BackButton = () => {
  const history = useHistory();

  return (
    <BaseButton onClick={history.goBack}>
      <span>Volver</span>
    </BaseButton>
  );
};
