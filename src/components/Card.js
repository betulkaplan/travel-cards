import React, { Component } from 'react';
import cardStyle from '.././Card.css';

export default class TravelCard extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
    };
  }

  overlayFunc = () => {
    this.setState({ hover: true });
  };
  overlayFuncEx = () => {
    this.setState({ hover: false });
  };

  render() {
    console.log(this.props.title);
    //const { isBoxVisible } = this.state.hover;
    return (
      <div>
        <div
          className={'container'}
          onMouseEnter={this.overlayFunc}
          onMouseLeave={this.overlayFuncEx}
        >
          <div className="title">
            <h1>
              {this.props.title === undefined ? 'Default' : this.props.title}
            </h1>
          </div>

          <img
            src={this.props.img}
            className={`${this.state.hover ? 'filtered' : null}`}
            alt=""
          />

          <p className={`overlay ${this.state.hover ? 'visible' : 'hidden'}`}>
            {this.props.desc}
          </p>
        </div>
      </div>
    );
  }
}
