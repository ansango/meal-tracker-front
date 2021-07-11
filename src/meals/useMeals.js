import { useState, useEffect } from "react";

export const useMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rawMeals, setRawMeals] = useState([]);

  useEffect(() => {
    const loadMeals = async () => {
      const response = await fetch("/meals");
      const rawMealsResponse = await response.json();
      setTimeout(() => {
        setRawMeals(rawMealsResponse);
        setIsLoading(false);
      }, 1500);
    };
    loadMeals();
  }, []);
  return {
    isLoading,
    meals: rawMeals.map((rawMeal) => ({
      ...rawMeal,
      plannedDate: new Date(rawMeal.plannedDate),
    })),
    setMeals: setRawMeals,
  };
};
