import React, { Component } from 'react'
import ChildRef from './ChildRef'

export class ParentRef extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
   
  }
  clickHandler = () => {
    console.log(this.inputRef.current.focusInput)
    this.inputRef.current.focusInput()
  }
  render() {
    return (
      <div>
        <ChildRef ref={this.inputRef} />
        <button onClick={this.clickHandler}>focus</button>
      </div>
    )
  }
}

export default ParentRef