import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';

import { setSearchfield, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchfield: state.searchRobots.searchfield,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending, 
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends React.Component {

  componentDidMount() {
    this.props.onRequestRobots()
  }

  render() {
    const { searchfield, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return isPending ? <h1>Loading...</h1> :
    (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
        <ErrorBoundary>
          <CardList robots={ filteredRobots } />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
