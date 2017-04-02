import React, { Component } from 'react';

export default class StoryStep extends Component {
  render() {
    return (
      <div className="step">
        <h3>Kirjoita tarina pelille, tai valitse <a href="#">pankista</a>. (Voit kirjoittaa tarinan myöhemmin asetuksista.)</h3>
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
