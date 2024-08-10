import React from 'react'

class Myclass extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  updateCount = ()=> {
    console.log(this)
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.updateCount}>update count</button>
      </div>
    );
  }

}

// new Myclass()
export default Myclass