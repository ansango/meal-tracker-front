import { AddMealSearchedButton, ViewRecipeDetailButton } from "../buttons";

export const CardRecipe = ({ onClick, name, missingIngredients, url }) => {
  const areMissingIng =
    missingIngredients.length !== 0 ? (
      <>{`Te faltan ${missingIngredients.length} ingredientes`}</>
    ) : (
      <>{"Todos los ingredientes están en tu lista"}</>
    );

  return (
    <div className="flex justify-between p-6 py-2 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-900">
      <div>
        <strong>{name}</strong>
        <p className="">{areMissingIng}</p>
      </div>
      <div>
        <ViewRecipeDetailButton url={url} />
        <AddMealSearchedButton onClick={onClick} />
      </div>
    </div>
  );
};
