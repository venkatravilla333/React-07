import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
    this.increase = this.increase.bind(this)
    console.log('parent construtor')
  }

  static getDerivedStateFromProps() {
    console.log('parent derived')
    return null
  }


  componentDidMount() {
  console.log('parent didMount')
  }
  
  shouldComponentUpdate() {
    console.log('parent should update')
    return true
  }
  getSnapshotBeforeUpdate() {
    console.log('parent snap')
    return null
  }

  componentDidUpdate() {
    console.log('parent didupdate')
  }
  increase() {
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    console.log('parent render')
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increase}>increase</button>
        <Child/>
      </div>
    )
  }
}

export default Parent