import React from 'react';
import { shallow, mount } from 'enzyme';
import { Input } from '@procore/core-react';
import { SegmentedController } from '@procore/core-react';

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
    it('shows all todos', () => {
      makeTodos(10);
      const wrapper = shallow(
        <ToDosList todos={todos} />
      );
      expect(wrapper.find(ToDoItem).length).toBe(10);
    });

    it('adds a todo', () => {
      const wrapper = shallow(
        <ToDosList todos={todos} />
      );
      expect(wrapper.find(ToDoItem).length).toBe(0);
      wrapper.find(Input).simulate('keyup', { key: 'Enter', target: { value: 'foobarbaz' } });
      wrapper.update();
      expect(wrapper.find(ToDoItem).length).toBe(1);
    });

    it('completes a todo', () => {
      makeTodos(10);
      const wrapper = shallow(
        <ToDosList todos={todos} />
      );
      wrapper.find(ToDoItem).at(3).props().onCompleted({ todo: 'todo3', completed: true });
      wrapper.update()
      expect(wrapper.findWhere(
        n => n.type() === ToDoItem && n.props().completed
      ).length).toBe(1);
      expect(wrapper.find(ToDoItem).at(3).props().completed).toBe(true);
    });

    it('shows only active todos', () => {
      makeTodos(10);
      const wrapper = shallow(
        <ToDosList todos={todos} />
      );

      wrapper.find(ToDoItem).at(3).props().onCompleted({ todo: 'todo3', completed: true });

      const segment = wrapper.find(SegmentedController.Segment).at(1);
      segment.simulate('click');

      expect(wrapper.find(ToDoItem).length).toBe(9);
    });

    it('shows only completed todos', () => {
      makeTodos(10);
      const wrapper = shallow(
        <ToDosList todos={todos} />
      );

      wrapper.find(ToDoItem).at(3).props().onCompleted({ todo: 'todo3', completed: true });

      const segment = wrapper.find(SegmentedController.Segment).at(2);
      segment.simulate('click');

      expect(wrapper.find(ToDoItem).length).toBe(1);
    });

    it('clears completed todos', () => {
      makeTodos(10);
      const wrapper = shallow(
        <ToDosList todos={todos} />
      );

      wrapper.find(ToDoItem).at(3).props().onCompleted({ todo: 'todo3', completed: true });
      wrapper.find(ToDoItem).at(4).props().onCompleted({ todo: 'todo4', completed: true });

      const segment = wrapper.find(SegmentedController.Segment).at(3);
      segment.simulate('click');

      expect(wrapper.find(ToDoItem).length).toBe(8);
    });
  });
});
