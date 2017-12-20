// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>Speed: {this.props.speed}</h3>
      </div>
    )
  }
}
