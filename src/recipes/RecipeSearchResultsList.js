import { LoaderCard } from "../ui";
import { RecipeSearchResultsListItem } from "./RecipeSearchResultsListItem";

export const RecipeSearchResultsList = ({
  ingredients,
  recipes,
  isLoading,
  url,
}) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-10 py-10">
      {isLoading && <LoaderCard amount={5} />}
      {!isLoading &&
        recipes.map((recipe) => {
          return (
            <RecipeSearchResultsListItem
              key={recipe.id}
              recipe={recipe}
              ingredients={ingredients}
              url={url}
            />
          );
        })}
    </div>
  );
};
