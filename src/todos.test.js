import todos from './todos';

describe('todos', () => {
  beforeEach(() => {
    todos.clear();
  });

  it('adds a todo to the list', () => {
    todos.add('do the thing!');
    expect(todos.list.size).toBe(1);
    expect(todos.list.has('do the thing!')).toBe.true;
  });

  it('removes a todo from the list', () => {
    const todo = 'do the thing!';
    todos.add(todo);
    expect(todos.list.has('do the thing!')).toBe.true;

    todos.remove(todo);
    expect(todos.list.has('do the thing!')).toBe.false;
  });

  it('clears the list', () => {
    todos.add('foo');
    todos.add('bar');
    expect(todos.list.size).toBe(2);

    todos.clear();
    expect(todos.list.size).toBe(0);
  });
});
