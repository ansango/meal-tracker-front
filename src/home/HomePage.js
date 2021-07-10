import React from "react";
import { Link } from "react-router-dom";
import { useMeals, MealsList } from "../meals";
import { useIngredients, IngredientsList } from "../ingredients";
import { ToggleTheme } from "../ui";

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
    <div className="page-container">
      <div className="column">
        <MealsList
          isLoading={isLoadingMeals}
          meals={meals}
          onDelete={onDeleteMeal}
        />
      </div>
      <div className="column">
        <IngredientsList
          isLoading={isLoadingIngredients}
          ingredients={ingredients}
          onDelete={onDeleteIngredient}
        />
        <Link to="/shopping-list">
          <button className="shopping-list-button list-container full-width">
            Lista de la compra
          </button>
        </Link>
      </div>
    </div>
  );
};
