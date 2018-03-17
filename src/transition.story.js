import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, number } from '@storybook/addon-knobs/react'

import { Alert, Button } from 'reactstrap'
import { TodoList } from './utils/TodoList'

import { TransitionGroup, Transition } from './transition'


const stories = storiesOf('molecules/Transition', module)

stories
  .add('Default', () => {
    const animations = ['fade', 'zoom', 'rotate', 'roll']
    const keys = animations.map((key) => (key))
    const duration = 1000

    return (
      <React.Fragment>
        <TodoList>

          {(state) => (

            <TransitionGroup style={{width: '100%', overflow: 'hidden'}}>
              {state.items.map((item, index) => (
                <Transition key={item} type={select('type', keys, 'fade')} duration={number('duration', duration, duration)}>

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
  .add('Use custom animation (bounce)', () => {
    const animation = {
      enter: {
        from: 'scale3d(0.3, 0.3, 0.3)',
        to: 'scale3d(2, 2, 2)',
      },
      exit: {
        from: 'initial',
        to: 'scale3d(0.3, 0.3, 0.3)',
      },
    }
    const duration = 1000

    return (
      <React.Fragment>
        <TodoList>

          {(state) => (

            <TransitionGroup style={{width: '100%', overflow: 'hidden'}}>
              {state.items.map((item, index) => (
                <Transition key={item} type="bounce" animation={animation} duration={number('duration', duration, duration)}>

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
  .add('Use custom animation (keyframes)', () => {
    const animation = {
      keyframes: `
          @keyframes bounceInDown {
            from, 60%, 75%, 90%, to {
              animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }
    
            0% {
              opacity: 0;
              transform: translate3d(0, -3000px, 0);
            }
    
            60% {
              opacity: 1;
              transform: translate3d(0, 25px, 0);
            }
    
            75% {
              transform: translate3d(0, -10px, 0);
            }
    
            90% {
              transform: translate3d(0, 5px, 0);
            }
    
            to {
              transform: translate3d(0, 0, 0);
            }
          }
    
          @keyframes bounceOutDown {
            20% {
              transform: translate3d(0, 10px, 0);
            }
    
            40%, 45% {
              opacity: 1;
              transform: translate3d(0, -20px, 0);
            }
    
            to {
              opacity: 0;
              transform: translate3d(0, 2000px, 0);
            }
          }
        `,
      enter: 'bounceInDown',
      exit: 'bounceOutDown',
    }
    const duration = 1000

    return (
      <React.Fragment>
        <TodoList>

          {(state) => (

            <TransitionGroup style={{width: '100%', overflow: 'hidden'}}>
              {state.items.map((item, index) => (
                <Transition key={item} type="bounce" animation={animation} duration={number('duration', duration, duration)}>

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
