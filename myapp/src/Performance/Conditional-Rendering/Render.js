import React, { useState } from 'react'
import Login from './Login'
import Profile from './Profile'

function Render() {
  var [login, setLogin] = useState(true);

  // if else

  // if (login) {
  //   return <Profile data={[login, setLogin]} />;
  // } else {
  //   return <Login data={[login, setLogin]} />
  // }

  //element varaible
  // var element
  // if (login) {
  //   element = <Profile data={[login, setLogin]} />
  // } else {
  //   element = <Login data={[login, setLogin]} />;
  // }
  // return element

  //ternary operator

  // return  login ? <Profile data={[login, setLogin]} /> : <Login data={[login, setLogin]} />

  //short circiut operator

  return  login && <Profile data={[login, setLogin]} />

  // return (
  //   <div>

  //     <Login />
  //     <Profile/>
  //   </div>
  // )
}

export default Render