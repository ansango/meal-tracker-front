import { Switch, Route, useRouteMatch } from "react-router-dom";

import { useState } from "react";
import { useIngredients } from "../ingredients";
import { useRecipesSearchResults } from "./useRecipesSearchResults";
import { BackButton, Container, SearchButton, Title, InputForm } from "../ui";
import { RecipeSearchResultsList } from "./RecipeSearchResultsList";
import { RecipeDetailPage } from "./RecipeDetailPage";

export const RecipeSearchPage = () => {
  const title = "Añade una comida al menú";
  const { path, url } = useRouteMatch();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchString, setSearchString] = useState("");
  const { ingredients } = useIngredients();
  const { searchResults, isLoading } = useRecipesSearchResults(searchString);

  const onSearchClick = () => {
    setSearchString(searchInputValue);
  };

  const onEnterKeyPress = (key) => {
    if (key === "Enter") {
      onSearchClick();
    }
  };

  return (
    <Container>
      <BackButton />
      <Switch>
        <Route exact path={path}>
          <div>
            <Title title={title} />
            <div className="max-w-md mx-auto">
              <div className="grid grid-cols-1 gap-2">
                <InputForm
                  type="text"
                  placeholder="Búsca una receta"
                  value={searchInputValue}
                  onChange={(event) => setSearchInputValue(event.target.value)}
                  onKeyPress={(event) => onEnterKeyPress(event.key)}
                />

                <SearchButton onClick={onSearchClick} />
              </div>
            </div>
            <RecipeSearchResultsList
              recipes={searchResults}
              ingredients={ingredients}
              isLoading={isLoading}
              url={url}
            />
          </div>
        </Route>
        <Route path={`${path}/:recipeId`}>
          <RecipeDetailPage />
        </Route>
      </Switch>
    </Container>
  );
};
