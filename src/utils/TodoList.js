import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'


const defaultProps = {
  items: ['hello', 'world', 'click', 'me'],
}

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.func.isRequired,
}

export class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {items: props.items}
  }

  handleAdd = () => {
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) // eslint-disable-line no-magic-numbers, max-len
    const items = [...this.state.items, randomString]

    this.setState({items})
  }

  handleRemove = (i) => {
    const newItems = this.state.items.slice()

    newItems.splice(i, 1)
    this.setState({items: newItems})
  }

  render() {
    return (
      <Fragment>
        <Button color="primary" onClick={this.handleAdd}>Add New</Button>
        <hr />
        {this.props.children({
          items: this.state.items,
          handleRemove: this.handleRemove,
        })}
      </Fragment>
    )
  }
}

TodoList.defaultProps = defaultProps
TodoList.propTypes = propTypes
