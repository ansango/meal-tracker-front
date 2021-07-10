import React from "react";
import { useMeals, MealsList } from "../meals";
import { useIngredients, IngredientsList } from "../ingredients";

export const HomePage = () => {
  const { meals, isLoading: isLoadingMeals, setMeals } = useMeals();
  const {
    ingredients,
    isLoading: isLoadingIngredients,
    setIngredients,
  } = useIngredients();

  const deleteMethod = { method: "delete" };

  const onDeleteMeal = async (id) => {
    const response = await fetch(`/meals/${id}`, deleteMethod);
    const updatedMeals = await response.json();
    setMeals(updatedMeals);
  };

  const onDeleteIngredient = async (name) => {
    const response = await fetch(`/ingredients/${name}`, deleteMethod);
    const updatedIngredients = await response.json();
    setIngredients(updatedIngredients);
  };

  return (
    <div className="grid md:grid-cols-2">
      <MealsList
        isLoading={isLoadingMeals}
        meals={meals}
        onDelete={onDeleteMeal}
      />

      <IngredientsList
        isLoading={isLoadingIngredients}
        ingredients={ingredients}
        onDelete={onDeleteIngredient}
      />
    </div>
  );
};
