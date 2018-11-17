import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({ searchRobots, requestRobots });
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>, document.getElementById('root'));
registerServiceWorker();


/*
props - are immutable and we pass them down - from the parent element of the Component
state - is a 'description of your App' at a current moment. a state is 'an object that describes your App'.
Parent Component >> feeds State into Child; and as soon as it receives it, it becomes Child's Props.
*/
