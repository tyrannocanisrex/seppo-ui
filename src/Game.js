import React, { Component } from 'react';
import './App.css';

import StepContainer from './containers/StepContainer';

export default class Game extends Component {
  render() {
    return (
      <div className="App">
        <StepContainer />
      </div>
    );
  }
}
