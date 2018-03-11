import React from 'react'
import { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs/react'

import { Alert, Button } from 'reactstrap'
import { TodoList } from './utils/TodoList'

import { TransitionGroup, Transition, transitionStyles } from './transition'


const stories = storiesOf('molecules/Transition', module)

stories
  .add('Default', () => {
    const keys = Object.keys(transitionStyles).map((key) => (key))

    return (
      <React.Fragment>
        <TodoList>

          {(state) => (

            <TransitionGroup style={{width: '100%', overflow: 'hidden'}}>
              {state.items.map((item, index) => (
                <Transition key={item} type={select('type', keys, 'fade')} duration={1000}>

                  <div style={{marginBottom: '.5rem'}}>
                    <Alert color="success" style={{display: 'inline-block', width: '100%'}}>
                      <div style={{float: 'left'}}>
                        <h6>{item}</h6>
                      </div>
                      <div style={{float: 'right'}}>
                        <Button color="secondary" onClick={() => state.handleRemove(index)}>Remove</Button>
                      </div>
                    </Alert>
                  </div>

                </Transition>
              ))}
            </TransitionGroup>

          )}

        </TodoList>
      </React.Fragment>
    )
  })


stories
  .add('Add new effects (test)', () => {
    transitionStyles.test = css`
      background-color: #000;
    `

    const keys = Object.keys(transitionStyles).map((key) => (key))

    return (
      <React.Fragment>
        <TodoList>

          {(state) => (

            <TransitionGroup style={{width: '100%', overflow: 'hidden'}}>
              {state.items.map((item, index) => (
                <Transition key={item} type={select('type', keys, 'fade')} duration={1000}>

                  <div style={{marginBottom: '.5rem'}}>
                    <Alert color="success" style={{display: 'inline-block', width: '100%'}}>
                      <div style={{float: 'left'}}>
                        <h6>{item}</h6>
                      </div>
                      <div style={{float: 'right'}}>
                        <Button color="secondary" onClick={() => state.handleRemove(index)}>Remove</Button>
                      </div>
                    </Alert>
                  </div>

                </Transition>
              ))}
            </TransitionGroup>

          )}

        </TodoList>
      </React.Fragment>
    )
  })
