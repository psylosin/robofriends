import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
import './App.css';

// create a state component
class App extends Component {
  constructor() {
    super()
    this.state = {
      // these change in the app
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users}));
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
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;