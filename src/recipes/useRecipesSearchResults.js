import { useState, useEffect } from "react";

export const useRecipesSearchResults = (searchString) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const loadSearchResults = async () => {
      const response = await fetch(`/recipes?search=${searchString}`);
      const results = await response.json();

      setSearchResults(results);
      setIsLoading(false);
    };
    loadSearchResults();
  }, [searchString]);
  return { isLoading, searchResults };
};
