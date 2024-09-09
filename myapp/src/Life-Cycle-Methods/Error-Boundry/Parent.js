import React, { Component } from 'react'
import Child from './Child'
import ErrorBoundry from './ErrorBoundry'

export class Parent extends Component {
  render() {
    return (
      <div>
        <ErrorBoundry>
        <Child age={15} />
        </ErrorBoundry>
        <ErrorBoundry>
        <Child age={18} />
        </ErrorBoundry>
        <ErrorBoundry>
        <Child age={10} />
        </ErrorBoundry>
      </div>
    )
  }
}

export default Parent