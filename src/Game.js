import React, { Component } from 'react';
import './App.css';
import './font-awesome/css/font-awesome.min.css';

import StepContainer from './containers/StepContainer';
import NavBar from './components/NavBar';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';

export default class Game extends Component {
  render() {
    return (
      <div>
        <NavBar />        
        <StepContainer />
      </div>
    );
  }
}
