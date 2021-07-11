import { route } from "../utils/endpoints";
import { useLocation, useHistory } from "react-router-dom";
import { CardRecipe } from "../ui";
import { formatIntlDate } from "../utils/formatDate";

export const RecipeSearchResultsListItem = ({
  recipe,
  ingredients = [],
  url,
}) => {
  const history = useHistory();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const selectedDate = formatIntlDate(params.get("date"));

  const missingIngredients = recipe.ingredients.filter(
    (recipeIngredient) =>
      !ingredients.some(
        (ingredient) => ingredient.name === recipeIngredient.name
      )
  );

  const addMealWithRecipe = async () => {
    await fetch(`${route.meals}`, {
      method: "post",
      body: JSON.stringify({ date: selectedDate, recipeId: recipe.id }),
      headers: { "Content-Type": "application/json" },
    });
    history.push("/");
  };

  const _url = `${url}/${recipe.id}`;

  return (
    <CardRecipe
      onClick={addMealWithRecipe}
      name={recipe.name}
      missingIngredients={missingIngredients}
      url={_url}
    />
  );
};
