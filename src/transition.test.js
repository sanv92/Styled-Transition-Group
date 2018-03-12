import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { TransitionGroup, Transition, transitionStyles } from './transition'


describe('TransitionGroup && Transition Components', () => {
  const div = document.createElement('div')
  const list = Object.keys(transitionStyles).map((key) => (key))

  let Component
  let ComponentDefault

  beforeEach(() => {
    Component = () => (
      <TransitionGroup>
        {list.map((item, index) => (
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
        {list.map((item, index) => (
          <Transition key={item}>
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

    for (let index = 0; index < list.length; index++) {
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

    for (let index = 0; index < list.length; index++) {
      expect(component.props().children[index].props.duration).toEqual(duration)
    }
  })

  test('Class', () => {
    const component = mount(Component())

    for (let index = 0; index < list.length; index++) {
      expect(component.props().children[index].type.styledComponentId).toBeDefined()
    }
  })

  test('Children', () => {
    const component = mount(Component())

    for (let index = 0; index < list.length; index++) {
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
})
