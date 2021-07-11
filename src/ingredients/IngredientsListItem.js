import { DeleteButton, CardIngredient } from "../ui";

export const IngredientsListItem = ({ ingredient, onDelete }) => {
  const onDeleteIngredient = () => onDelete(ingredient.name);
  const data = {
    name: ingredient.name,
    amount: ingredient.amount,
    units: ingredient.units,
  };
  return (
    <CardIngredient data={data}>
      <DeleteButton onClick={onDeleteIngredient} />
    </CardIngredient>
  );
};
