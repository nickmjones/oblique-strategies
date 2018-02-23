import React, { Component } from 'react';
import Strategies from './Strategies.js';
import './ShowStrategy.css';

const ShowStrategy = props => {
  var strategy = Strategies[ Math.floor(Math.random()*Strategies.length) ];
  console.log(strategy);
  var s = document.querySelector(".strategy");
  console.log(s);
  return (
    <div className="ShowStrategy">
      <h1 className="strategy">{ strategy }</h1>
    </div>
  );
}

export default ShowStrategy;
