import React, { Component } from 'react';
import { Input } from '@procore/core-react';
import { SegmentedController } from '@procore/core-react';

import ToDoItem from './ToDoItem';

const todoViews = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
};

export default class ToDosList extends Component {
  constructor(props) {
    super(props);
    const { todos } = props;
    this.state = {
      todos: todos.all,
      currentView: todoViews.ALL,
      currentTodo: ''
    };
  }

  onCompletedToggled = (todo) => {
    this.props.todos.toggle(todo);
    this.setState({
      todos: this.props.todos[this.state.currentView]
    });
  }

  onKeyUp = ({ key, target: { value } }) => {
    if (key === "Enter" && !!value) {
      this.props.todos.add(value);
      this.setState({ todos: this.props.todos[this.state.currentView] });
      if (this.inputRef) {
        this.inputRef.value = '';
      }
    }
  }

  setView = currentView => {
    this.setState({ currentView, todos: this.props.todos[currentView] });
  }

  clearCompleted = () => {
    this.props.todos.clear();
    this.setState({ todos: this.props.todos[this.state.currentView] })
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <Input
          inputRef={node => this.inputRef = node}
          onKeyUp={this.onKeyUp}
        />
        {[...todos.entries()].map(([todo, completed]) => (
          <ToDoItem
            key={todo}
            todo={todo}
            completed={completed}
            onToggled={this.onCompletedToggled}
          />
        ))}
        <SegmentedController>
          <SegmentedController.Segment
            onClick={() => this.setView(todoViews.ALL)}
            active={this.state.currentView === todoViews.ALL}
          >
            All
          </SegmentedController.Segment>
          <SegmentedController.Segment
            onClick={() => this.setView(todoViews.ACTIVE)}
            active={this.state.currentView === todoViews.ACTIVE}
          >
            Active
          </SegmentedController.Segment>
          <SegmentedController.Segment
            onClick={() => this.setView(todoViews.COMPLETED)}
            active={this.state.currentView === todoViews.COMPLETED}
          >
            Completed
          </SegmentedController.Segment>
          <SegmentedController.Segment
            onClick={() => this.clearCompleted()}
            active={false}
          >
            Clear Completed
          </SegmentedController.Segment>
        </SegmentedController>
      </div>
    );
  }
}
