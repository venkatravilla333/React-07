import React from 'react'
import Parent from './client-side-routing/Parent';
// import Parent from './Portals/Parent';
// import Parent from './Performance/Duplicate-Logic/funCom/custom-hooks/Parent';
// import Parent from './Performance/Duplicate-Logic/classCom/Render-Props/Parent';
// import A from './State/SyncData/FunctionalComponents/4.GlobalState/React-Redux/React-Components/A';
// import Render from './Performance/Conditional-Rendering/Render';
// import Fragment from './Performance/Fragment/Fragment';

// import Inline from './CSS/Inline/Inline';
// import Login from './CSS/Style-sheet/MyLogin';
// import Signup from './CSS/Style-sheet/Signup';
// import MyLogin from './CSS/Style-sheet/MyLogin';
// import Value from './normal vs state vs ref/Value';
// import InputRef from './Refs/InputRef';
// import Timer from './Refs/Timer';
// import Parent from './Performance/Duplicate-Logic/classCom/HOC/Parent';
// import List from './Lists/List';
// import Parent from './Destructuring/Parent';
// import A from './State/SyncData/FunctionalComponents/4.GlobalState/ContextAPI/A';
// import A from './State/AsyncData/FunctionalComponents/4.GlobalState/React-Toolkit/React-Components/A';
// import A from './State/AsyncData/FunctionalComponents/4.GlobalState/React-Redux/React-Components/A';
// import A from './State/AsyncData/FunctionalComponents/4.GlobalState/ContextAPI/A';
// import A from './State/AsyncData/FunctionalComponents/1.LocalState/A';
// import A from './State/AsyncData/FunctionalComponents/4.GlobalState/ContextAPI/A';
// import A from './State/AsyncData/FunctionalComponents/1.LocalState/A';
// import A from './State/SyncData/FunctionalComponents/4.GlobalState/React-Redux/React-Components/A';
// import A from './State/SyncData/FunctionalComponents/4.GlobalState/ContextAPI/A';
// import A from './State/SyncData/FunctionalComponents/4.GlobalState/React-Redux/React-Components/A';
// import A from './State/SyncData/FunctionalComponents/3.PropsDrilling/A';
// import Child from './Child'
// import Jsx from './JSX/Jsx';
// import A from './State/FunctionalComponents/1.LocalState/A';
// import Parent from './Props/child to parent/Parent';
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
        {/* <Parent/> */}
        {/* <A/> */}
        {/* <List/> */}
        {/* <Parent/> */}
        {/* <Render/> */}
        {/* <Fragment/> */}
        {/* <Inline/> */}
        {/* <MyLogin/> */}
        {/* <Signup /> */}
        {/* <Value/> */}
        {/* <InputRef/> */}
        {/* <Timer/> */}
        {/* <Parent/> */}
        <Parent/>
      </div>
    ); 
  }
}

export default App



