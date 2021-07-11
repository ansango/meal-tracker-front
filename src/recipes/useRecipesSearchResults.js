import { route } from "../utils/endpoints";
import { useState, useEffect } from "react";

export const useRecipesSearchResults = (searchString) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const loadSearchResults = async () => {
      const response = await fetch(`${route.recipes}${searchString}`);
      const results = await response.json();
      setSearchResults(results);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
    loadSearchResults();
  }, [searchString]);
  return { isLoading, searchResults };
};
