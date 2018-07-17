import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

// create a state component
class App extends Component {
  constructor() {
    super()
    this.state = {
      // these change in the app
      robots: robots,
      searchfield: ''
    }
  }

  // listener that reports search changes (grabs this from SearchBox)
  onSearchChange = (event) => {
    // updates state of searchfield to searched term
    this.setState({ searchfield: event.target.value })
  }

  // renders view based on state (which in turn is based on search term)
  render() {
    // outputs the robot name if it is equal to the search term
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;