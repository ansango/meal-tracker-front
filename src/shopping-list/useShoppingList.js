import { route } from "../utils/endpoints";
import { useState, useEffect } from "react";

export const useShoppingList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [noItems, setNoItems] = useState(true);

  useEffect(() => {
    const loadShoppingList = async () => {
      const response = await fetch(`${route.shopping}`);
      const items = await response.json();
      const noItems = items.length === 0;
      setTimeout(() => {
        setNoItems(noItems);
        setItems(items);
        setIsLoading(false);
      }, 1500);
    };

    loadShoppingList();
  }, []);
  return { isLoading, items, noItems };
};
