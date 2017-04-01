import React, { Component } from 'react';
import './App.css';

import Step from './components/Step';

export default class Game extends Component {
  render() {
    return (
      <div className="App">
        <Step stepName="SettingStep" />
      </div>
    );
  }
}
