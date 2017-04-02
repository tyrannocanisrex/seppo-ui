import React, { Component } from 'react';
import NamingStepContainer from '../containers/NamingStepContainer';
import SettingStepContainer from '../containers/SettingStepContainer';
import MapStep from './MapStep';
import GameConfigContainer from '../containers/GameConfigContainer';
import IntroStepContainer from '../containers/IntroStepContainer';
import StoryStepContainer from '../containers/StoryStepContainer';

export default class Step extends Component {
  steps() {
    return (
      <div className="game-config-container">
        {this.props.step.stepName === 'IntroStep' && <IntroStepContainer />}
        {this.props.step.stepName === 'NamingStep' && <NamingStepContainer />}
        {this.props.step.stepName === 'MapStep' && <MapStep />}
        {this.props.step.stepName === 'StoryStep' && <StoryStepContainer />}
        {this.props.step.stepName === 'SettingStep' && <SettingStepContainer />}
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.props.step.stepName !== 'GameConfig' ? this.steps() : <GameConfigContainer /> }
      </div>
    );
  }
}
