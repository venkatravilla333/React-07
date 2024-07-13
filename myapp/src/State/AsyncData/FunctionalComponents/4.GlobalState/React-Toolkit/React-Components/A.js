import React from 'react'
import B from './B'
import C from './C'

import {Provider} from 'react-redux'
import { store } from '../toolkit/store'

function A() {
  return (
    <div>
      <Provider store={store}>
      <B />
      <C />
      </Provider>
    </div>
  )
}

export default A