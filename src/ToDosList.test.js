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
    it('shows all todos', () => {
    });

    it('adds a todo', () => {
    });

    it('completes a todo', () => {
    });

    it('shows only active todos', () => {
    });

    it('shows only completed todos', () => {
    });

    it('clears completed todos', () => {
      
    });
  });
});
