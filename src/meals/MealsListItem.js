import { DeleteButton, AddMealButton } from "../ui";

export const MealsListItem = ({ meal, date, onDelete }) => {
  const onDeleteMeal = () => onDelete(meal._id);
  const url = `/recipes?date=${date.toString()}`;
  return (
    <div className="list-item">
      {meal ? (
        <>
          <h3>{date.getDate()}</h3>
          <p>{meal.recipe.name}</p>
          <div className="right-action">
            <DeleteButton onClick={onDeleteMeal} />
          </div>
        </>
      ) : (
        <>
          <h3>{date.getDate()}</h3>
          <p>Nada previsto</p>
          <AddMealButton url={url} />
        </>
      )}
    </div>
  );
};
