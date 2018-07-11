import todos from './todos';

describe('todos', () => {
  beforeEach(() => {
  });

  it('adds a todo to the list', () => {
    todos.add('do the thing!')
    expect(todos.all.size).toBe(1);
  });

  it.skip('completes a todo from the list', () => {
  });

  it.skip('clears completed todos from the list', () => {
  });

  it.skip('lists all todos', () => {
  });

  it.skip('lists active todos', () => {
  });

  it.skip('lists completed todos', () => {
  });
});
