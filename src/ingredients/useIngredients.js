import { useState, useEffect } from "react";
import { route } from "../utils/endpoints";

export const useIngredients = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    const loadIngredients = async () => {
      const response = await fetch(`${route.ingredients}`);
      const ingredients = await response.json();
      setTimeout(() => {
        setIngredients(ingredients);
        setIsLoading(false);
      }, 500);
    };

    loadIngredients();
  }, []);
  return { isLoading, ingredients, setIngredients };
};
