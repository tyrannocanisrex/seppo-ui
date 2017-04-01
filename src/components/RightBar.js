import React, { Component } from 'react';
import SidebarButton from './SidebarButton';

export default class RightBar extends Component {
  render() {
    return (
      <div className="sidebar-right">
        <SidebarButton awesomeName="play" awesomeSize="3x" text="PÄÄLLE/SULJE" />
        <SidebarButton awesomeName="bolt" awesomeSize="3x" text="SALAMATEHTÄVÄT" />
        <SidebarButton awesomeName="map-marker" awesomeSize="3x" text="TEHTÄVÄT" />
        <SidebarButton awesomeName="bar-chart" awesomeSize="3x" text="PISTEET" />
        <SidebarButton awesomeName="comment" awesomeSize="3x" text="PELICHAT" />
      </div>
    );
  }
}
