import React, { Component } from 'react'
import ShowStrategy from './ShowStrategy/ShowStrategy';
import NewStrategyButton from './NewStrategyButton/NewStrategyButton';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <ShowStrategy/>
        <NewStrategyButton/>
      </div>
    );
  };
}

export default App;
