import React, { useMemo, useState } from 'react'

function Heavy() {
  var [count, setCount] = useState(0)
  var [num, setNum] = useState(20)

  var factorialValue = useMemo(() => {
  return calFactorial(num)
 }, [num])
  
  var increaseCount = () => {
    setCount(count+1)
  }
  var increaseNum = () => {
    setNum(num+1)
  }

  function calFactorial(n) {
    var factResult = 1
    for (var i = n; i >= 1; i--){
      factResult = factResult*i
    }
    console.log('factorial')
    return factResult
  }
  console.log('render')
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increaseCount}>increase count</button>
      <h2>Factorail Value: {factorialValue}</h2>
      <button onClick={increaseNum}>increase num</button>

    </div>
  )
}

export default Heavy