import React, { Component } from 'react'
import ChildRef from './ChildRef'

export class ParentRef extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
   
  }
  clickHandler = () => {
    this.inputRef.current.focusInput()
  }
  render() {
    return (
      <div>
        <ChildRef ref={this.inputRef} />
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default ParentRef