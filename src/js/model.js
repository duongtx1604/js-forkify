import { async } from 'regenerator-runtime';

export const state = {
  recipe: {},
};
export const loadRecipe = async function (id) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} Error code: ${res.status}`);
    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      servings: recipe.servings,
      image: recipe.image_url,
      cookingTime: recipe.cooking_time,
      publisher: recipe.publisher,
      source: recipe.source_url,
      ingredients: recipe.ingredients,
    };

    console.log(state.recipe);
  } catch (error) {
    alert(error);
  }
};
