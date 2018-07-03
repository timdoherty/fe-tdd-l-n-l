import todos from './todos';

describe('todos', () => {
  beforeEach(() => {
    todos.clearAll();
  });

  it('adds a todo to the list', () => {
    todos.add('do the thing!');
    expect(todos.list.size).toBe(1);
    expect(todos.list.has('do the thing!')).toBe.true;
  });

  it('completes a todo from the list', () => {
    const todo = 'do the thing!';
    todos.add(todo);
    expect(todos.list.has('do the thing!')).toBe.true;
    expect(todos.list.get('do the thing!')).toBe.true;

    todos.toggle(todo);
    expect(todos.list.get('do the thing!')).toBe.false;
  });

  it('clears completed todos from the list', () => {
    todos.add('foo');
    todos.add('bar');
    todos.add('baz');
    expect(todos.list.size).toBe(3);

    todos.toggle('foo', true);
    todos.toggle('bar', true);
    todos.clear();
    expect(todos.list.size).toBe(1);
  });
});
