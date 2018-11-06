import React from 'react';
import img from './right.png';

export default class ScrollRight extends React.Component {
  render() {
    return (
      <Arrow>
          <img src={img} className="App-arrowR" alt="arrowR" />
      </Arrow>
    )
  }
}