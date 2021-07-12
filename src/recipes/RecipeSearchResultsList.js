import { LoaderCard } from "../ui";
import { RecipeSearchResultsListItem } from "./RecipeSearchResultsListItem";

export const RecipeSearchResultsList = ({
  ingredients,
  recipes,
  isLoading,
  url,
}) => {
  return (
    <div className="grid gap-4 md:grid-cols-1 md:gap-5 lg:grid-cols-2 lg:gap-10 xl:grid-cols-3 py-10">
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
