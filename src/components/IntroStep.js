import React, { Component } from 'react';

export default class IntroStep extends Component {
  render() {
    return (
      <div className="intro-step">
        <div className="heading">
          <h1>Tervetuloa Seppo.io -palveluun!</h1>
        </div>
        <div style={{width: '100%'}}>
          <div style={{
            width: '45%',
            float: 'left',
            margin: '0.5em',
            display: 'inline-block',
            height: '250px'
          }}>
            <h4>Ohjevideot</h4>
            <img style={{height: '200px', left: '1em'}} alt="Ohjevideot" src="/seppo-tutorial.png" />
          </div>
          <div style={{
            width: '45%',
            float: 'left',
            margin: '0.5em',
            display: 'inline-block',
            height: '250px'
          }}>
            <button>Tee tutoriaali!</button>
            <button onClick={(e) => {
              e.preventDefault();
              this.props.newGame();
            }}>Tee uusi peli!</button>
          </div>
        </div>

      </div>
    );
  }
}
