import React from "react";
import { route } from "../utils/endpoints";
import { useMeals, MealsList } from "../meals";
import { useIngredients, IngredientsList } from "../ingredients";
import { Container, Title } from "../ui";

export const HomePage = () => {
  const title = "Meal Tracker";
  const { meals, isLoading: isLoadingMeals, setMeals } = useMeals();
  const {
    ingredients,
    isLoading: isLoadingIngredients,
    setIngredients,
  } = useIngredients();

  const deleteMethod = { method: "delete" };

  const onDeleteMeal = async (id) => {
    const response = await fetch(`${route.meals}/${id}`, deleteMethod);
    const updatedMeals = await response.json();
    setMeals(updatedMeals);
  };

  const onDeleteIngredient = async (name) => {
    const response = await fetch(`${route.ingredients}/${name}`, deleteMethod);
    const updatedIngredients = await response.json();
    setIngredients(updatedIngredients);
  };

  return (
    <Container>
      <Title title={title}></Title>
      <div className="grid gap-10 md:grid-cols-2 py-10">
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
    </Container>
  );
};
