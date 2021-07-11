import { route } from "../utils/endpoints";
import { useState, useEffect } from "react";

export const useRecipeDetail = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const loadRecipe = async () => {
      const response = await fetch(`${route.recipe}/${id}`);
      const results = await response.json();
      setRecipe(results);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
    loadRecipe();
  }, [id]);
  return { isLoading, recipe };
};
