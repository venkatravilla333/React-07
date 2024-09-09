import React, { Component } from 'react'

export class ErrorBoundry extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       hasError: false
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError : true
    }
  }
  componentDidCatch(error) {
    console.log(error)
  }
  render() {
    if (this.state.hasError) {
      return <h2>Age must be more than 18</h2>
    } else {
     return this.props.children
    }
  }
}

export default ErrorBoundry