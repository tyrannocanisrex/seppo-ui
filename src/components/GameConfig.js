import React, { Component } from 'react';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

export default class GameConfig extends Component {
  render() {
    return (
      <div style={{ height: '100vw', overflow: 'hidden' }}>
        <LeftBar />
        <RightBar />
        <img src="/map.png" alt="Kartta" style={{ width: '100vw' }}/>
      </div>
    );
  }
}
