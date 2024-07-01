import React from 'react'
import Child from './Child'
import Jsx from './JSX/Jsx';
//functional component

// function App() {
//   return <h1>Hello</h1>
// }

// export default App

//class component

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       num: 10
    }
  }
  render() {
    return (
      <div className='app'>
        <h1>App {this.state.num}</h1>
        <Child data='sachin' num={this.state.num} />
        <Child data = 'kohli'/>
        <Child data='dhoni' />
        <Jsx/>
      </div>
    ); 
  }
}

export default App



