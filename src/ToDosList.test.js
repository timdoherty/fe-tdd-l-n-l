import React from 'react';
import { shallow, mount } from 'enzyme';

import ToDosList from './ToDosList';
import ToDoItem from './ToDoItem';
import todos from './todos';

function makeTodos(howMany) {
  for (let i = 0; i < howMany; i++) {
    todos.add(`todo${i}`);
  }
}

describe('<ToDosList/>', () => {
  beforeEach(() => {
    todos.clearAll();
  });

  describe('Shallow Rendering', () => {
    it('renders a ToDoItem for each todo', () => {
      makeTodos(10);
      const wrapper = shallow(
        <ToDosList todos={todos.list} />
      );
      expect(wrapper.find(ToDoItem).length).toBe(10);
    });

    it('completes a todo', () => {
      makeTodos(10);
      const wrapper = shallow(
        <ToDosList todos={todos.list} />
      );
      expect(wrapper.find(ToDoItem).length).toBe(10);
      wrapper.find(ToDoItem).at(3).props().onCompleted({ todo: 'todo3', completed: true });
      expect(todos.list.size).toBe(9);
    });
  });
});
