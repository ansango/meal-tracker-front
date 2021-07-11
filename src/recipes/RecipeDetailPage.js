import { useParams } from "react-router-dom";
import { LoaderCard, Subtitle, Title } from "../ui";
import { useRecipeDetail } from "./useRecipeDetail";

export const RecipeDetailPage = () => {
  let { recipeId } = useParams();
  const { isLoading, recipe } = useRecipeDetail(recipeId);
  return (
    <>
      {isLoading && <LoaderCard amount={5} />}
      {!isLoading && <DetailComponent recipe={recipe} />}
    </>
  );
};

const DetailComponent = ({ recipe }) => {
  const { name, ingredients } = recipe;
  const ingredientsName = ingredients.map((ingredient) => ingredient.name);
  console.log(ingredientsName);
  return (
    <>
      <Title title={name} />
      <div className="flex flex-col justify-center items-center">
        <Subtitle subtitle={"Ingredientes"} />
        <ul>
          {ingredientsName.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
