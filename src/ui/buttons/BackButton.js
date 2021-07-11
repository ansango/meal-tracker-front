import { useHistory } from "react-router-dom";
import { BackIcon } from "../icons";
import { BaseButton } from "./BaseButton";

export const BackButton = () => {
  const history = useHistory();

  return (
    <BaseButton onClick={history.goBack}>
      <BackIcon size={20} />
    </BaseButton>
  );
};
