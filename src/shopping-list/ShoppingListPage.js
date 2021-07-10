import { useShoppingList } from "./useShoppingList";
import { BackButton } from "../ui";

export const ShoppingListPage = () => {
  const { isLoading, items, noItems } = useShoppingList();
  return (
    <div className="page">
      <BackButton />
      <div className="centered-container">
        <h1>Lista de la compra</h1>
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          !noItems &&
          items.map((item) => <p key={item}>{item}</p>)}
        {!isLoading && noItems && <p>No existe ningún artículo</p>}
      </div>
    </div>
  );
};
