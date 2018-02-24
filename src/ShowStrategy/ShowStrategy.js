import React, { Component } from 'react';
import Strategies from './Strategies.js';
import Fade from 'react-reveal/Fade';
import './ShowStrategy.css';

class ShowStrategy extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    var strategy = Strategies[ Math.floor(Math.random()*Strategies.length) ];
    return (
      <div className="ShowStrategy">
        <Fade><h2 className="strategy">{ strategy }</h2></Fade>
      </div>
    );
  };
  
};

export default ShowStrategy;
