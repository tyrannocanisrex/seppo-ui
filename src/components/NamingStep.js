import React, { Component } from 'react';

export default class NamingStep extends Component {
  render() {
    return (
      <div className="step">
        <h3>Uusi peli</h3>
        <input type="text" placeholder="Nimi" ref="name" />
        <button onClick={(e) => {
          e.preventDefault();
          this.props.selectLiveMap(this.refs.name.value);
        }}>Live-kartta</button>
        <button onClick={(e) => {
          e.preventDefault();
          this.props.selectCustomMap(this.refs.name.value);
        }}>Karttakuva</button>
      </div>
    );
  }
}
