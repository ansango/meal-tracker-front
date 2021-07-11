//"https://meal-tracker-back.herokuapp.com";
// "http://localhost:8080";
const BASE = "http://localhost:8080";

export const route = {
  ingredients: `${BASE}/ingredients`,
  meals: `${BASE}/meals`,
  recipes: `${BASE}/recipes?search=`,
  recipe: `${BASE}/recipes`,
  shopping: `${BASE}/shopping-list`,
};
