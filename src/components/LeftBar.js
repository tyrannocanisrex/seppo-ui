import React, { Component } from 'react';
import SidebarButton from './SidebarButton';
import FontAwesome from 'react-fontawesome';

export default class LeftBar extends Component {
  render() {
    return (
      <div className="sidebar-left">
        <SidebarButton awesomeName="gear" awesomeSize="3x" text="ASETUKSET"/>
        <SidebarButton awesomeName="map-marker" awesomeSize="3x" text="LISÄÄ TEHTÄVÄ"/>
        <SidebarButton awesomeName="user" awesomeSize="3x" text="LISÄÄ PELAAJA"/>
      </div>
    );
  }
}
