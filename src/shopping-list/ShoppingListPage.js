import { useShoppingList } from "./useShoppingList";
import { BackButton, Container, Title } from "../ui";
import { BookMarkIcon } from "../ui/icons";

export const ShoppingListPage = () => {
  const title = "Lista de la compra";
  const { isLoading, items, noItems } = useShoppingList();

  return (
    <Container>
      <BackButton />

      <Title title={title} />
      {isLoading && <p>Loading...</p>}
      {!isLoading && !noItems && (
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4 md:grid-cols-2 md:gap-5 py-10">
            {items.map((item) => (
              <div
                className="bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-900"
                key={item}
              >
                <div className="p-6 py-2 rounded-lg flex items-center justify-between">
                  <p className="">{item}</p>
                  <BookMarkIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {!isLoading && noItems && <p>No existe ningún artículo</p>}
    </Container>
  );
};
