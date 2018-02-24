import React, { Component } from 'react'
import './NewStrategyButton.css';

const NewStrategyButton = () => {
  const RefreshPage = () => {
    window.location.reload()
  }
  return(
    <button className="NewStrategyButton" onClick={ RefreshPage }>
    </button>
  );
}

export default NewStrategyButton;
