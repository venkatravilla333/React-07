import React, { useEffect, useRef, useState } from 'react'

function Timer() {
  var [timer, setTimer] = useState(1)
 var timerCount  = useRef()
 useEffect(() => {
   timerCount.current = setInterval(() => { 
     setTimer((prestate) => {
       console.log(prestate)
       return prestate+1
     })
    
   }, 1000)
     
   return  ()=> {
      clearInterval(timerCount.current)
    }
  })
  return (
    <div>
      <h3>Timer: {timer}</h3>
      <button onClick={()=>clearInterval(timerCount.current)}>stop timer</button>
    </div>
  )
}

export default Timer