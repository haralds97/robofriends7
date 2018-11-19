import {
	CHANGE_IN_SEARCH_FIELD,
	REQUEST_ROB_PENDING,
	REQUEST_ROB_SUCCESS,
	REQUEST_ROB_FAILED
} from './constants.js';

export const fillSearchField = text => ({
	type: CHANGE_IN_SEARCH_FIELD,
	payload: text
});

export const requestRobots = () => dispatch => {
	dispatch({ type: REQUEST_ROB_PENDING });
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(data => dispatch({ type: REQUEST_ROB_SUCCESS, payload: data }))
	.then(err => dispatch({ type: REQUEST_ROB_FAILED, payload: err }));
}