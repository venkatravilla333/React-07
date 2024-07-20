import React, { Component } from 'react'

export class Count1 extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Count1: {this.props.count}</h2>
        <button onClick={this.props.increaseCount}>increase count</button>
      </div>
    )
  }
}

export default Count1