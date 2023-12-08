import { state } from '../model.js';
import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const nextPageMarkup = `<button data-goto="${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
    <span>Page ${curPage + 1}</span>
    <svg class="search__icon">
    <use href="${icons}#icon-arrow-right"></use>
    </svg>
      </button>
      `;
    const prevPageMarkup = `<button data-goto="${
      curPage - 1
    }" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
    <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${curPage - 1}</span>
    </button>`;

    // Page 1, and other page
    if (curPage === 1 && curPage < numPages) {
      return nextPageMarkup;
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return prevPageMarkup;
    }
    // Other page
    if (curPage < numPages) {
      return prevPageMarkup + nextPageMarkup;
    }
    // Page 1, no other page
    return '';
  }
}
export default new PaginationView();
