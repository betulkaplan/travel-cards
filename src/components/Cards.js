import React, { Component } from 'react';
import Card from './Card';
import { data } from './data';
import cardStyle from '.././Card.css';

export default class Cards extends Component {
  render() {
    console.log(data);
    const arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(
        <Card
          id={data[i].id}
          title={data[i].title}
          desc={data[i].desc}
          img={data[i].image}
        />
      );
    }
    return (
      <div className="cards">
        <h1>POPULAR TOUR PLACES</h1>
        <div className="card-box">{arr}</div>
      </div>
    );
  }
}
