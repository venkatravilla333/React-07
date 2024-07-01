import React from 'react'
import Child from './Child'
import Jsx from './JSX/Jsx';
import Parent from './Props/child to parent/Parent';
// import Parent from './Props/parent to child/Parent';
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
        {/* <h1>App {this.state.num}</h1>
        <Child data='sachin' num={this.state.num} />
        <Child data = 'kohli'/>
        <Child data='dhoni' />
        <Jsx/> */}
        <Parent/>
      </div>
    ); 
  }
}

export default App



