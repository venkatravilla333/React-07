import React, { Component } from 'react'

export class Count2 extends Component {
  render() {
    return (
      <div>
        <h2>Count2: {this.props.count}</h2>
        <button onMouseOver={this.props.increaseCount}>increase count</button>
      </div>
    );
  }
}

export default Count2