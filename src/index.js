import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { searchRobots } from './reducers';

const store = createStore(searchRobots);

ReactDOM.render(
		<Provider >
			<App store={store}/>
		</Provider>, document.getElementById('root'));
registerServiceWorker();


/*
props - are immutable and we pass them down - from the parent element of the Component
state - is a 'description of your App' at a current moment. a state is 'an object that describes your App'.
Parent Component >> feeds State into Child; and as soon as it receives it, it becomes Child's Props.
*/
