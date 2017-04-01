import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logocontainer">
            <a href="#">
              <img alt="Seppo"  src="/seppo-logo.png" className="logo" />
            </a>
        </div>
        <div style={{ float: 'left', marginTop: '1em', marginBottom: '1em' }}>
          <a href="#" style={{display: 'inline', margin: '1em', textDecoration: 'none', color: 'black' }}>
            <FontAwesome name="book" size="2x"/>
            Lisäresurssit
          </a>
          <a href="#" style={{ display: 'inline', margin: '1em', textDecoration: 'none', color: 'black' }}>
            <FontAwesome name="share" size="2x"/>
            Pelin jakaminen
          </a>
        </div>
        <div className="navbar-links">
            <a href="#">AVAA SEPPO SUPPORT</a>
            <a href="#"><FontAwesome name="home" size="2x"/></a>
            <a href="#"><FontAwesome name="trophy" size="2x"/></a>
            <a href="#"><FontAwesome name="user" size="2x"/></a>
        </div>
      </nav>
    );
  };
}
