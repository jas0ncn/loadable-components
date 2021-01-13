// We simulate that "moment" is called in "A" and "B"
import React from 'react'
import moment from 'moment'

// sub loadable
import loadable from '@loadable/component'

const SubB1 = loadable(() => import('./B1'))

const B = () => (
  <>
    <SubB1 />
    <span>B</span>
  </>
)

// We keep a reference to prevent uglify remove
B.moment = moment

export default B
