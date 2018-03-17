import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { TransitionGroup, Transition } from './transition'


describe('TransitionGroup && Transition Components', () => {
  const div = document.createElement('div')
  const animations = ['fade', 'zoom', 'rotate', 'roll']
  const animationTransform = {
    enter: {from: 'scale3d(0.3, 0.3, 0.3)', to: 'scale3d(2, 2, 2)'},
    exit: {from: 'initial', to: 'scale3d(0.3, 0.3, 0.3)'},
  }
  const animationKeyframes = {
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

  let Component
  let ComponentDefault
  let ComponentKeyframes
  let ComponentTransform

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

    ComponentTransform = () => (
      <TransitionGroup>
        {animations.map((item, index) => (
          <Transition key={item} animation={animationTransform}>
            <div>
              {index}
            </div>
          </Transition>
        ))}
      </TransitionGroup>
    )

    ComponentKeyframes = () => (
      <TransitionGroup>
        {animations.map((item, index) => (
          <Transition key={item} animation={animationKeyframes}>
            <div>
              {index}
            </div>
          </Transition>
        ))}
      </TransitionGroup>
    )
  })

  test('Will not crash (Component)', () => {
    ReactDOM.render(
      <Component />
      , div,
    )
  })


  test('Will not crash (ComponentDefault)', () => {
    ReactDOM.render(
      <ComponentDefault />
      , div,
    )
  })


  test('Will not crash (ComponentTransform)', () => {
    ReactDOM.render(
      <ComponentTransform />
      , div,
    )
  })


  test('Will not crash (ComponentKeyframes)', () => {
    ReactDOM.render(
      <ComponentKeyframes />
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

  // Snapshots
  test('Snapshot (Component)', () => {
    const tree = renderer.create(<Component />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Snapshot (ComponentDefault)', () => {
    const tree = renderer.create(<ComponentDefault />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Snapshot (ComponentTransform)', () => {
    const tree = renderer.create(<ComponentTransform />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Snapshot (ComponentKeyframes)', () => {
    const tree = renderer.create(<ComponentKeyframes />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
