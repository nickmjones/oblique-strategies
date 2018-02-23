import React, { Component } from 'react';
import Strategies from './Strategies.js';
import './ShowStrategy.css';

const ShowStrategy = props => {
  var strategy = Strategies[ Math.floor(Math.random()*Strategies.length) ];
  return (
    <div className="ShowStrategy">
      <h1 className="strategy">{ strategy }</h1>
    </div>
  );
}

export default ShowStrategy;
