import React, { Component } from 'react';
import NamingStep from './NamingStep';
import SettingStep from './SettingStep';
import MapStep from './MapStep';
import GameConfig from './GameConfig';

export default class Step extends Component {
  render() {
    switch(this.props.stepName) {
      case 'NamingStep':
        return (
          <div>
            <button>Edellinen</button>
            <NamingStep />;
          </div>
        );
      case 'MapStep':
        return (
          <div>
            <button>Edellinen</button>
            <MapStep />
          </div>
        );
      case 'SettingStep':
        return (
          <div>
            <button>Edellinen</button>
            <SettingStep />
          </div>
        );
      case 'GameConfig':
        return (
          <div>
            <button>Edellinen</button>
            <GameConfig />
          </div>
        );
      default:
        return (
          <div>
            <button>Edellinen</button>
            <NamingStep />
          </div>
        );
    }
  }
}
