import React, { Component } from 'react';
import Strategies from './Strategies.js';
import FavoriteButton from '../FavoriteButton/FavoriteButton.js';
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
        <FavoriteButton/>
        <Fade><h3 className="strategy">{ strategy }</h3></Fade>
      </div>
    );
  };
  
};

export default ShowStrategy;
