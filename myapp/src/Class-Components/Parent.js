import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
    this.increase = this.increase.bind(this)
  }

  increase() {
    console.log(this)
    this.setState({
      count: this.state.count+1
    })
    // this.state.count = this.state.count+1
  }
  render() {
    var {count} = this.state
    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={this.increase}>increase</button>
        <Child count={this.state.count} />
      </div>
    )
  }
}

export default Parent