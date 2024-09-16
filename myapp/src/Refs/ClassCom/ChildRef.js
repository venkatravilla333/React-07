import React, { Component } from 'react'

export class ChildRef extends Component {
  constructor(props) {
    super(props)
  
    this.myRef = React.createRef()
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