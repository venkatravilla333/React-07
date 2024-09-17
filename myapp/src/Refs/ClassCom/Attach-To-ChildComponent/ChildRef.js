import React, { Component } from 'react'

export class ChildRef extends Component {
  constructor(props) {
    super(props)
  
    this.myRef = React.createRef()
  }
  focusInput() {
    console.log(this.myRef.current)
    this.myRef.current.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.myRef}/>
      </div>
    )
  }
}

export default ChildRef