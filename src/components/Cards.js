import React, { Component } from 'react';
import Card from './Card';
import { data } from './data';
import cardStyle from '.././Card.css';

export default class Cards extends Component {
  render() {
    console.log(data);
    const arr = data.map((item) => (
      <Card id={item.id} title={item.title} desc={item.desc} img={item.image} />
    ));
    return (
      <div className="cards">
        <h1>POPULAR TOUR PLACES</h1>
        <div className="card-box">{arr}</div>
      </div>
    );
  }
}
