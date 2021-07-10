import { AddIngredientButton } from "../ui";
import { IngredientsListItem } from "./IngredientsListItem";

export const IngredientsList = ({ ingredients, isLoading, onDelete }) => (
  <div>
    <h2>Ingredientes</h2>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      ingredients.map((ingredient) => (
        <IngredientsListItem
          key={ingredient.name}
          ingredient={ingredient}
          onDelete={onDelete}
        />
      ))
    )}

    <AddIngredientButton />
  </div>
);
