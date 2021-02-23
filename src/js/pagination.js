import refs from './refs.js';
import addPaginationMarkup from './pagenationMarkup.js';
import { forwardOnePage, backOnePage, movieApiService } from './homePage.js';
import MovieApiService from './apiService.js';

addPaginationMarkup();

const nextPartPage = document.querySelector('.next-part-page');
