import React, { Component } from 'react';

export class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dCount: 0,
      nCount: 100,
    };
    console.log('constructor');
  }

  updateDcount = () => {
    this.setState({
      dCount: this.state.dCount + 1,
    });
  };
  updateNcount = () => {
    this.setState({
      nCount: this.state.nCount + 1,
    });
  };

  componentDidMount() {
    console.log('did mount');
    document.title = `${this.state.dCount}`;
  }

  componentDidUpdate(preProps, preState) {
    if (preState.dCount !== this.state.dCount) {
      console.log('did update');
      document.title = `${this.state.dCount}`;
    }
  }

  render() {
    console.log('render');
    return (
      <div>
        <h2>Dom count: {this.state.dCount}</h2>
        <button onClick={this.updateDcount}>update dom count</button>
        <h2>Normal count: {this.state.nCount}</h2>
        <button onClick={this.updateNcount}>update normal count</button>
      </div>
    );
  }
}

export default Parent;
