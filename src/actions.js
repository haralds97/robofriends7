import { CHANGE_SEARCH_FIELD } from './constants.js';

const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
});