const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const showRecipe = async function () {
  try {
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} Error code: ${res.status}`);
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      servings: recipe.servings,
      image: recipe.image_url,
      cookingTime: recipe.cooking_time,
      publisher: recipe.publisher,
      source: recipe.source_url,
      ingredients: recipe.ingredients,
    };

    console.log(recipe);
  } catch (err) {
    console.error(err);
    // alert(err);
  }
};
showRecipe();
