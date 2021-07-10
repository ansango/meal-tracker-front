import { useState, useEffect } from "react";

export const useShoppingList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [noItems, setNoItems] = useState(true);

  useEffect(() => {
    const loadShoppingList = async () => {
      const response = await fetch("/shopping-list");
      const items = await response.json();
      const noItems = items.length === 0;
      setNoItems(noItems);
      setItems(items);
      setIsLoading(false);
    };

    loadShoppingList();
  }, []);
  return { isLoading, items, noItems };
};
