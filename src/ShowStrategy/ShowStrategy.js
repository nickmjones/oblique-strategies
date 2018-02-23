import React, { Component } from 'react';
import Strategies from './Strategies.js';
import './ShowStrategy.css';

class ShowStrategy extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    var strategy = Strategies[ Math.floor(Math.random()*Strategies.length) ];
    return (
      <div className="ShowStrategy">
        <h1 className="strategy">{ strategy }</h1>
      </div>
    );
  }
}

export default ShowStrategy;
