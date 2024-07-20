
import React from "react"


export var Hoc = (OriginalComponent) => {
  class NewCom extends React.Component{
    constructor() {
      super()
      this.state = {
        count: 0
      }
    }
    increaseCount = () => {
      this.setState({
        count: this.state.count+1
      })
    }
    render() {
      return <div>
        <OriginalComponent count={this.state.count} increaseCount={this.increaseCount} />
      </div>
    }
  }
  return NewCom
}