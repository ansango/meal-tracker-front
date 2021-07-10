import { useState } from "react";
import { useIngredients } from "../ingredients";
import { useRecipesSearchResults } from "./useRecipesSearchResults";
import { BackButton } from "../ui";
import { RecipeSearchResultsList } from "./RecipeSearchResultsList";

export const RecipeSearchPage = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchString, setSearchString] = useState("");
  const { ingredients } = useIngredients();
  const { searchResults } = useRecipesSearchResults(searchString);

  const onSearchClick = () => {
    setSearchString(searchInputValue);
  };

  const onEnterKeyPress = (key) => {
    if (key === "Enter") {
      onSearchClick();
    }
  };

  return (
    <div className="page">
      <BackButton />
      <div className="centered-container">
        <h1>Añade una comida al menú</h1>
        <input
          type="text"
          className="space-before space-after full-width"
          placeholder="Búsca una receta"
          value={searchInputValue}
          onChange={(event) => setSearchInputValue(event.target.value)}
          onKeyPress={(event) => onEnterKeyPress(event.key)}
        />
        <button className="full-width space-after" onClick={onSearchClick}>
          Buscar
        </button>
        <RecipeSearchResultsList
          recipes={searchResults}
          ingredients={ingredients}
        />
      </div>
    </div>
  );
};
