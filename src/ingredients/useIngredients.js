import { useState, useEffect } from "react";

export const useIngredients = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    const loadIngredients = async () => {
      const response = await fetch("/ingredients");
      const ingredients = await response.json();
      setTimeout(() => {
        setIngredients(ingredients);
        setIsLoading(false);
      }, 1500);
    };

    loadIngredients();
  }, []);
  return { isLoading, ingredients, setIngredients };
};
