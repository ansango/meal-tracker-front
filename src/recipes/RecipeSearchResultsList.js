import { RecipeSearchResultsListItem } from "./RecipeSearchResultsListItem";

export const RecipeSearchResultsList = ({ ingredients, recipes }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-10 py-10">
      {recipes.map((recipe) => (
        <RecipeSearchResultsListItem
          key={recipe.id}
          recipe={recipe}
          ingredients={ingredients}
        />
      ))}
    </div>
  );
};
