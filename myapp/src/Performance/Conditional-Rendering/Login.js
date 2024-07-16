import React from 'react'

function Login(props) {
  var [ login, setLogin ] = props.data
  console.log(login)
  console.log(setLogin)
  return (
    <div>
      <button onClick={()=>setLogin(login=true)}>Login</button>
    </div>
  )
}

export default Login