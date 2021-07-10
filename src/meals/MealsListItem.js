import { Link } from "react-router-dom";
import { SmallX } from "../ui";

export const MealsListItem = ({ meal, date, onDelete }) => {
  const onDeleteMeal = () => onDelete(meal._id);
  return (
    <div className="list-item">
      {meal ? (
        <>
          <h3>{date.getDate()}</h3>
          <p>{meal.recipe.name}</p>
          <div className="right-action">
            <SmallX onClick={onDeleteMeal} />
          </div>
        </>
      ) : (
        <>
          <h3>{date.getDate()}</h3>
          <p>Nada previsto</p>
          <div className="right-action">
            <Link to={`/recipes?date=${date.toString()}`}>
              <button>Añadir</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
