import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
    console.log('Child construtor');
  }

  static getDerivedStateFromProps() {
    console.log('Child derived');
    return null;
  }

  increase() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  componentDidMount() {
    console.log('child didMount');
  }

  shouldComponentUpdate() {
    console.log('child should update');
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log('child snap');
    return null;
  }

  componentDidUpdate() {
    console.log('child didupdate');
  }
  render() {
    console.log('Child render');
    return (
      <div>
        <h2>Child</h2>
      </div>
    );
  }
}

export default Child;
