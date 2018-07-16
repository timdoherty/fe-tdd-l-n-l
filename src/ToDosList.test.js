import React from 'react';
import { shallow } from 'enzyme';

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
    it.skip('shows all todos', () => {
    });

    it.skip('adds a todo', () => {
    });

    it.skip('completes a todo', () => {
    });

    it.skip('shows only active todos', () => {
    });

    it.skip('shows only completed todos', () => {
    });

    it.skip('clears completed todos', () => {
      
    });
  });
});
