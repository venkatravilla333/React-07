import React, { Component } from 'react'

export class Count3 extends Component {
  render() {
    return (
      <div>
        <h2>Count3: {this.props.count}</h2>
        <button onDoubleClick={this.props.increaseCount}>increase count</button>
      </div>
    );
  }
}

export default Count3