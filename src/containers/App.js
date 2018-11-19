import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from	'../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField, findRobots } from '../actions.js';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		isPending: state.requestRobots.isPending,
		robots: state.requestRobots.robots,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRobotsRequest: () => dispatch(findRobots())
	}
}


class App extends Component {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		robots: [],
	// 		// searchfield: ''
	// 	}
	// }

componentDidMount () {
	this.props.onRobotsRequest();
}

// onSearchChange = (event) => {
// 		this.setState({ searchfield: event.target.value });
// 	}
	
	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPending ?
			 <h1>Loading</h1>
			: (
				<div className="tc">
					<h1 className="f1">Robofriends </h1>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div> 
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);