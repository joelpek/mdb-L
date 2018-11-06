import React from 'react';
import img from './left.png';

export default class ScrollLeft extends React.Component {
  render() {
    return (
      <Arrow>
          <img src={img} className="App-arrowL" alt="arrowL" />
      </Arrow>
    )
  }
}
