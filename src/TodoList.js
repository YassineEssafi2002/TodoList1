import React, { Component } from 'react'

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <h1>TO DO LIST</h1>
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}
deleteItem = key => {
  const filteredItems = this.state.items.filter(item => {
    return item.key !== key
  })
  this.setState({
    items: filteredItems,
  })
}


editItem = key => {
  const selectedItem = this.state.items.find(item => item.key === key)
  this.setState({
    currentItem: selectedItem,
  })
  this.props.inputElement.current.focus()
}


export default TodoList;