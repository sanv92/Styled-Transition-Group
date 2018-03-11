import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'


addDecorator(withKnobs)
addDecorator((fn) => (
  <div style={{padding: '15px'}}>
    {fn()}
  </div>
))

configure(() => {
  const req = require.context('../src', true, /\.story\.js$/)

  req.keys().forEach(req)
}, module)
