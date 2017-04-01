import React, { Component } from 'react';
import NamingStep from './NamingStep';
import SettingStep from './SettingStep';
import MapStep from './MapStep';
import GameConfig from './GameConfig';

export default class Step extends Component {
  render() {
    return (<div>
      <button onClick={(e) => {
        e.preventDefault();
        this.props.clickPrevious({stepNow: this.props.step.stepName, stepTo: this.props.step.previousStep});
      }}>Edellinen</button>
        {this.props.step.stepName === 'NamingStep' && <NamingStep />}
        {this.props.step.stepName === 'MapStep' && <MapStep />}
        {this.props.step.stepName === 'SettingStep' && <SettingStep />}
        {this.props.step.stepName === 'GameConfig' && <GameConfig />}
      </div>
    );
  }
}
