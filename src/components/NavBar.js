import React, { Component } from 'react';
import cardStyle from '.././Card.css';

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      hover: 'false',
    };
  }
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="navbar-container">
            <li className="navbar-item">ABOUT US</li>
            <li className="navbar-item">FOR YOU</li>
            <li className="navbar-item">SERVICES</li>
            <li className="navbar-item">BLOG</li>
            <li className="navbar-item">VLOG</li>
            <li className="navbar-item">CONTACT</li>
          </div>
        </div>
      </div>
    );
  }
}
