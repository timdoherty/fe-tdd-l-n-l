import React from 'react';
import { shallow, mount } from 'enzyme';
import { Checkbox } from '@procore/core-react';

import ToDoItem from './ToDoItem';

describe('<ToDoItem/>', () => {
  beforeEach(() => {
    // setup each test here (or use before() for all)
  });

  afterEach(() => {
    // tear down each test here (or use after() for all)
  });

  describe('Shallow Rendering', () => {
    it('shows the todo text', () => {
      const wrapper = shallow(
        <ToDoItem itemText="foobarbaz" />
      );
      expect(wrapper.text()).toMatch(/foobarbaz/);
    });

    it('has a completed checkbox', () => {
      const wrapper = shallow(
        <ToDoItem
          itemText="foobarbaz"
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
          itemText="foobarbaz"
          completed={true}
          onCompleted={onCompletedMock}
        />
      );

      wrapper.find(Checkbox).simulate('click');
      expect(onCompletedMock.mock.calls.length).toBe(1);
      expect(onCompletedMock.mock.calls[0][0]).toEqual({ 'foobarbaz': false });
    });
  });
});
