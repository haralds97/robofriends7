import {
	CHANGE_IN_SEARCH_FIELD,
	REQUEST_ROB_PENDING,
	REQUEST_ROB_SUCCESS,
	REQUEST_ROB_FAILED
} from './constants.js';

const initialStateForSearch = {
	searchField: ''
};

export const searchForRobots = (state=initialStateForSearch, action={}) => {
	switch(action.type) {
		case CHANGE_IN_SEARCH_FIELD:
			return Object.assign({}, state, { searchField: action.payload });
		default:
			return state;
	}
}

const initialStateForRequest = {
	isPending: false,
	robs: [],
	error: ''
}

export const requestForRobots = (state=initialStateForRequest, action={}) => {
	switch(action.type) {
		case REQUEST_ROB_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_ROB_SUCCESS:
			return Object.assign({}, state, { robs: action.payload, isPending: false });
		case REQUEST_ROB_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false });
		default:
			return state;
	}
}