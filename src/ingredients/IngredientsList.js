import { AddIngredientButton, Subtitle, LoaderCard } from "../ui";
import { HashTagIcon } from "../ui/icons";
import { IngredientsListItem } from "./IngredientsListItem";

export const IngredientsList = ({ ingredients, isLoading, onDelete }) => {
  const subtitle = "Ingredientes";
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <HashTagIcon />
          <Subtitle subtitle={subtitle} />
        </div>

        <AddIngredientButton />
      </div>
      {isLoading ? (
        <LoaderCard amount={4} />
      ) : (
        ingredients.map((ingredient) => (
          <IngredientsListItem
            key={ingredient.name}
            ingredient={ingredient}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};
