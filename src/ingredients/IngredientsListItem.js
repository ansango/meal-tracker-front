import { DeleteButton } from "../ui";

export const IngredientsListItem = ({ ingredient, onDelete }) => {
  const onDeleteIngredient = () => onDelete(ingredient.name);
  return (
    <div className="list-item">
      <h3>{ingredient.name}</h3>
      <p>
        {ingredient.amount} {ingredient.units}
      </p>
      <div className="right-action">
        <DeleteButton onClick={onDeleteIngredient} />
      </div>
    </div>
  );
};
