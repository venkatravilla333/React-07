import React, { Component } from 'react'
import { Hoc } from './Hoc';

export class Count2 extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }

  // increaseCount = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Count2: {this.props.count}</h2>
        <button onMouseOver={this.props.increaseCount}>increase count</button>
      </div>
    );
  }
}

export default Hoc(Count2)