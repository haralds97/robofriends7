import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from	'../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions.js';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		isPending: state.requestForRobots.isPending,
		robots: state.requestForRobots.robots,
		error: state.requestForRobots.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRobotsRequest: () => dispatch(requestRobots())
	}
}

class App extends Component {

componentDidMount () {
	this.props.onRobotsRequest();
}

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