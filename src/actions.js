import { 
	CHANGE_SEARCH_FIELD,
	ROBOTS_REQUEST_PENDING,
	ROBOTS_REQUEST_SUCCESS,
	ROBOTS_REQUEST_FAILED
} from './constants.js';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
});

export const requestRobots = () => (dispatch) => {
	dispatch({ type: ROBOTS_REQUEST_PENDING });
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(data => dispatch({ type: ROBOTS_REQUEST_SUCCESS, payload: data }))
	.catch(error => dispatch({ type: ROBOTS_REQUEST_FAILED, payload: error }));
}