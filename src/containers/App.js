import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from	'../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import { fillSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchForRobots.searchField,
		isP: state.requestForRobots.isPending,
		rs: state.requestForRobots.robs,
		errrr: state.requestForRobots.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: (event) => dispatch(fillSearchField(event.target.value)),
		onRobsRequest: () => dispatch(requestRobots())
	}
}

class App extends Component {

componentDidMount () {
	this.props.onRobsRequest();
}
	
	render() {
		const { rs, searchField, onSearchChange, isP } = this.props;
		const filteredRobots = rs.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isP ?
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
