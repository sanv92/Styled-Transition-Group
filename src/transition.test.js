import React from 'react'
import ReactDOM from 'react-dom'
import { css } from 'styled-components'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { TransitionGroup, Transition } from './transition'


describe('TransitionGroup && Transition Components', () => {
  const div = document.createElement('div')
  const animations = ['fade', 'zoom', 'rotate', 'roll']

  let Component
  let ComponentDefault
  let ComponentAnimation

  const animation = css`
      @keyframes bounceInDown {
        from,
        60%,
        75%,
        90%,
        to {
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
  
        40%,
        45% {
          opacity: 1;
          transform: translate3d(0, -20px, 0);
        }
  
        to {
          opacity: 0;
          transform: translate3d(0, 2000px, 0);
        }
      }
  
     &.bounce-enter {
        animation: bounceOutDown ${(p) => p.duration}ms linear infinite
      }
  
      &.bounce-enter.bounce-enter-active {
        animation: bounceInDown ${(p) => p.duration}ms linear infinite;
      }
  
      &.bounce-exit {
        animation: bounceInDown ${(p) => p.duration}ms linear infinite;
      }
  
      &.bounce-exit.bounce-exit-active {
        animation: bounceOutDown ${(p) => p.duration}ms linear infinite
      }
    `

  beforeEach(() => {
    Component = () => (
      <TransitionGroup>
        {animations.map((item, index) => (
          <Transition key={item} type={item} duration={2000}>
            <div>
              {index}
            </div>
          </Transition>
        ))}
      </TransitionGroup>
    )

    ComponentDefault = () => (
      <TransitionGroup>
        {animations.map((item, index) => (
          <Transition key={item}>
            <div>
              {index}
            </div>
          </Transition>
        ))}
      </TransitionGroup>
    )

    ComponentAnimation = () => (
      <TransitionGroup>
        {animations.map((item, index) => (
          <Transition key={item} animation={animation}>
            <div>
              {index}
            </div>
          </Transition>
        ))}
      </TransitionGroup>
    )
  })

  test('Will not crash', () => {
    ReactDOM.render(
      <Component />
      , div,
    )
  })

  test('Check Default props', () => {
    const component = mount(ComponentDefault())
    const duration = 1000
    const type = 'fade'

    for (let index = 0; index < animations.length; index++) {
      expect(component.props().children[index].props.duration).toEqual(duration)
      expect(component.props().children[index].props.type).toEqual(type)
    }
  })

  test('Count', () => {
    const component = mount(Component())
    const equalCount = 4

    expect(component.props().children.length).toEqual(equalCount)
  })

  test('Duration', () => {
    const component = mount(Component())
    const duration = 2000

    for (let index = 0; index < animations.length; index++) {
      expect(component.props().children[index].props.duration).toEqual(duration)
    }
  })

  test('Class', () => {
    const component = mount(Component())

    for (let index = 0; index < animations.length; index++) {
      expect(component.props().children[index].type.styledComponentId).toBeDefined()
    }
  })

  test('Children', () => {
    const component = mount(Component())

    for (let index = 0; index < animations.length; index++) {
      expect(component.props().children[index].props.children).toBeDefined()
    }
  })

  test('Render default component snapshot', () => {
    const tree = renderer.create(<ComponentDefault />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Render custom component snapshot', () => {
    const tree = renderer.create(<Component />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Add custom animation', () => {
    const tree = renderer.create(<ComponentAnimation />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
