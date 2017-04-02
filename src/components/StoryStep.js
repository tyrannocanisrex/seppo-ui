import React, { Component } from 'react';

export default class StoryStep extends Component {
  render() {
    return (
      <div className="step">
        <h3>Määrittele tarina osallistujille</h3>
        <textarea style={{
          width: '70%',
          height: '150px'
        }}></textarea>
        <h3>Oppimistavoitteet</h3>
        <textarea style={{
          width: '70%',
          height: '150px'
        }}></textarea>
        <button onClick={(e) => {
          e.preventDefault();
          this.props.toSettingStep();
        }}>Seuraava</button>
      </div>
    );
  }
}
