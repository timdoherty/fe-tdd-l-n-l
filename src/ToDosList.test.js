import React from 'react';
import { shallow, mount } from 'enzyme';
import { Input } from '@procore/core-react';

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

    it('adds a todo', () => {
      const wrapper = shallow(
        <ToDosList todos={todos.list} />
      );
      expect(wrapper.find(ToDoItem).length).toBe(0);
      wrapper.find(Input).simulate('keyup', { target: { key: 'Enter', value: 'foobarbaz' } });
      wrapper.update();
      expect(wrapper.find(ToDoItem).length).toBe(1);
    });

    it('completes a todo', () => {
      makeTodos(10);
      const wrapper = shallow(
        <ToDosList todos={todos.list} />
      );
      wrapper.find(ToDoItem).at(3).props().onCompleted({ todo: 'todo3', completed: true });
      wrapper.update()
      expect(wrapper.findWhere(
        n => n.type() === ToDoItem && n.props().completed
      ).length).toBe(1);
      expect(wrapper.find(ToDoItem).at(3).props().completed).toBe(true);
    });
  });
});
