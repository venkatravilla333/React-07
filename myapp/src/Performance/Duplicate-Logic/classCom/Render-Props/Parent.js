import React from 'react'
import Count1 from './Count1'
import Count2 from './Count2'
import Count3 from './Count3'
import Render from './Render'

function Parent() {
  return (
    <div>
      <Render render={(count, increaseCount) => {
        return <Count1 count={count} increaseCount={increaseCount } />
      }} />
      <Render render={(count, increaseCount) => {
        return <Count2 count={count} increaseCount={increaseCount } />
      }} />
      <Render render={(count, increaseCount) => {
        return <Count3 count={count} increaseCount={increaseCount } />
      }} />
    </div>
  )
}

export default Parent