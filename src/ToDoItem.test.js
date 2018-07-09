import React from 'react';
import { shallow, mount } from 'enzyme';
import { Checkbox } from '@procore/core-react';

import ToDoItem from './ToDoItem';

describe('<ToDoItem/>', () => {
  describe('Shallow Rendering', () => {
    it('shows the todo text', () => {
      const wrapper = shallow(
        <ToDoItem todo="foobarbaz" />
      );
      expect(wrapper.text()).toMatch(/foobarbaz/);
    });

    it('has a completed indicator', () => {
      const wrapper = shallow(
        <ToDoItem
          todo="foobarbaz"
          completed={true}
        />
      );
      expect(wrapper.find(Checkbox).exists()).toBe(true);
      expect(wrapper.find(Checkbox).props().checked).toBe(true);
    });

    it('calls back when completed is toggled', () => {
      const onCompletedMock = jest.fn();
      const wrapper = shallow(
        <ToDoItem
          todo="foobarbaz"
          completed={true}
          onCompleted={onCompletedMock}
        />
      );

      wrapper.find(Checkbox).simulate('click');
      expect(onCompletedMock.mock.calls.length).toBe(1);
      expect(onCompletedMock.mock.calls[0][0]).toEqual({ todo: 'foobarbaz', completed: false });
    });
  });
});
