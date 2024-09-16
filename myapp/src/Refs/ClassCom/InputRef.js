import React, { Component } from 'react'

export class InputRef extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.cbRef = null
    this.helloRef = (element) => {
      this.cbRef = element
    }
   
  }
  componentDidMount() {
    console.log(this.myRef)
    // this.myRef.current.focus()
    if (this.cbRef) {
      this.cbRef.focus()
    }
    
  }

  getValue = () => {
   console.log(this.myRef.current.value)
  }
  render() {
    return (
      <div>
        {/* <input type="text" ref={this.myRef} /> */}
        <input type="text" ref={this.helloRef} />
        <button onClick={this.getValue}>get value</button>
      </div>
    )
  }
}

export default InputRef