import View from './View.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = `No  recipes found for your query! Please try again!`;
  _message = '';

  _generateMarkup() {
    return this._data.map(recipe => previewView.render(recipe, false)).join('');
  }
}
export default new ResultsView();
