import { DeleteButton, AddMealButton, CardMeal } from "../ui";
import { formatDateIntl } from "../utils/formatDate";

export const MealsListItem = ({ meal, date, onDelete }) => {
  const intlDate = formatDateIntl(date);
  const onDeleteMeal = () => onDelete(meal._id);
  const url = `/recipes?date=${intlDate.url}`;

  const data = {
    date: intlDate.el,
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
