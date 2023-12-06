import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    //get hash
    const id = window.location.hash.slice(1);

    if (!id) return;

    // spinner effect (View)
    recipeView.renderSpinner();

    // 1) Loading recipe (Model)
    await model.loadRecipe(id);

    // 2) Rendering recipe (View)
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
  }
};
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
