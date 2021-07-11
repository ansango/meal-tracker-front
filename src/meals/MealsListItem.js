import { DeleteButton, AddMealButton, CardMeal } from "../ui";

export const MealsListItem = ({ meal, date, onDelete }) => {
  const onDeleteMeal = () => onDelete(meal._id);
  const url = `/recipes?date=${date.toString()}`;

  const data = {
    date: date.getDate(),
    meal: meal ? meal.recipe.name : "Nada previsto",
  };

  return (
    <>
      <CardMeal data={data}>
        {meal ? (
          <DeleteButton onClick={onDeleteMeal} />
        ) : (
          <AddMealButton url={url} />
        )}
      </CardMeal>
    </>
  );
};
