import React, { Component } from 'react'
import Header from './Header/Header';
import ShowStrategy from './ShowStrategy/ShowStrategy';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ShowStrategy/>
      </div>
    );
  };
}

export default App;
