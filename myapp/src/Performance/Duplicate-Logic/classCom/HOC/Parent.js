import React, { Component } from 'react'
import Count1 from './Count1'
import Count2 from './Count2'
import Count3 from './Count3'

export class Parent extends Component {
  
  render() {
    return (
      <div>
        <h4>Parent</h4>
        <Count1 />
        <Count2 />
        <Count3 />
      </div>
    )
  }
}

export default Parent