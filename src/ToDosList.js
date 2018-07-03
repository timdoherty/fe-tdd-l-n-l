import React, { Component } from 'react';

import ToDoItem from './ToDoItem';
import todos from './todos';

export default class ToDosList extends Component {
  onCompletedToggled = ({ todo, completed }) => {
    todos.toggle(todo, completed);
  }

  render() {
    const { todos } = this.props;

    return (
      <div>
        {[...todos.entries()].map(([todo, completed]) => (
          <ToDoItem
            key={todo}
            todo={todo}
            completed={completed}
            onCompleted={this.onCompletedToggled}
          />
        ))}
      </div>
    );
  }
}
