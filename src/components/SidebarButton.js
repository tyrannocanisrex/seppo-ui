import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class SidebarButton extends Component {
  construct() {
    this.showInstructions = false;
  }

  toggleInstructions(value) {
    this.showInstructions = value;
  }

  render() {
    return (
      <div className="sidebar-button">
        <FontAwesome name={this.props.awesomeName} size={this.props.awesomeSize ? this.props.awesomeSize : '2x'} />
        <p>{this.props.text} <FontAwesome name="question-circle"/></p>
      </div>
    );
  }
}
