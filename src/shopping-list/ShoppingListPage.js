import { useShoppingList } from "./useShoppingList";
import {
  BackButton,
  CardShoppingItem,
  Container,
  Title,
  LoaderCard,
} from "../ui";

export const ShoppingListPage = () => {
  const title = "Lista de la compra";
  const { isLoading, items, noItems } = useShoppingList();

  return (
    <Container>
      <BackButton />

      <Title title={title} />
      <div className="max-w-3xl mx-auto">
        <div className="grid gap-4 md:grid-cols-2 md:gap-5 py-10">
          {isLoading && <LoaderCard amount={5} />}
          {!isLoading &&
            !noItems &&
            items.map((item) => <CardShoppingItem key={item} item={item} />)}
          {!isLoading && noItems && <p>No existe ningún artículo</p>}
        </div>
      </div>
    </Container>
  );
};
