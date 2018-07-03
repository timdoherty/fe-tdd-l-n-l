import React, { Component } from 'react';
import { Input } from '@procore/core-react';

import ToDoItem from './ToDoItem';
import todos from './todos';

export default class ToDosList extends Component {
  constructor(props) {
    super(props);
    const { todos } = props;
    this.state = { todos };
  }

  onCompletedToggled = ({ todo, completed }) => {
    todos.toggle(todo, completed);
    this.setState({ todos: todos.list });
  }

  onKeyUp = ({ target: { key, value } }) => {
    console.log({key}, {value})
    if (key === "Enter" && !! value) {
      todos.add(value);
      this.setState({ todos: todos.list });
    }
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <Input
          onKeyUp={this.onKeyUp}
        />
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
