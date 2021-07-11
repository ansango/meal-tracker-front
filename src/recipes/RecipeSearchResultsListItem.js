import { route } from "../utils/endpoints";
import { useLocation, useHistory } from "react-router-dom";
import { CardRecipe } from "../ui";

export const RecipeSearchResultsListItem = ({ recipe, ingredients = [] }) => {
  const history = useHistory();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const selectedDate = new Date(params.get("date"));

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

  return (
    <CardRecipe
      onClick={addMealWithRecipe}
      name={recipe.name}
      missingIngredients={missingIngredients}
    />
  );
};
