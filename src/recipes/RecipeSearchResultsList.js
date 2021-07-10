import { RecipeSearchResultsListItem } from "./RecipeSearchResultsListItem";

export const RecipeSearchResultsList = ({ ingredients, recipes, message }) => {
  return (
    <>
      <div>{message}</div>
      {recipes.map((recipe) => (
        <RecipeSearchResultsListItem
          key={recipe.id}
          recipe={recipe}
          ingredients={ingredients}
        />
      ))}
    </>
  );
};
