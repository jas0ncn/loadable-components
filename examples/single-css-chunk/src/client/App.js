import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import loadable from '@loadable/component'
import './main.css'

const A = loadable(() => import('./letters/A'))
const B = loadable(() => import('./letters/B'))

const App = () => (
  <div>
    <A />
    <br />
    <B />
  </div>
)

export default App
