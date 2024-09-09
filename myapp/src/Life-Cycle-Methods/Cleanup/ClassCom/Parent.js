import React, { Component } from 'react';

export class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
    console.log('constructor');
  }

  updateState = (e) => {
    console.log('update state');
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  componentDidMount() {
    console.log('did mount');
    window.addEventListener('mousemove', this.updateState);
  }

  componentWillUnmount() {
    console.log('clean up')
    window.removeEventListener('mousemove', this.updateState)
  }

  render() {
    console.log('render');
    return (
      <div id='parent'>
        <h3>Parent com</h3>
        <h2>X: {this.state.x}</h2>
        <h2>Y: {this.state.y}</h2>
      </div>
    );
  }
}

export default Parent;
