import todos from './todos';

describe('todos', () => {
  beforeEach(() => {
    todos.clearAll();
  });

  it('adds a todo to the list', () => {
    todos.add('do the thing!');
    expect(todos.all.size).toBe(1);
    expect(todos.all.has('do the thing!')).toBe(true);
  });

  it('completes a todo from the list', () => {
    const todo = 'do the thing!';
    todos.add(todo);
    expect(todos.all.has('do the thing!')).toBe(true);
    expect(todos.all.get('do the thing!')).toBe(false);

    todos.toggle(todo);
    expect(todos.all.get('do the thing!')).toBe(true);
  });

  it('clears completed todos from the list', () => {
    todos.add('foo');
    todos.add('bar');
    todos.add('baz');
    expect(todos.all.size).toBe(3);

    todos.toggle('foo');
    todos.toggle('bar');
    todos.clear();
    expect(todos.all.size).toBe(1);
  });

  it('lists all todos', () => {
    todos.add('foo');
    todos.add('bar');
    todos.add('baz');
    todos.toggle('foo');

    expect(todos.all.size).toBe(3);
  });

  it('lists active todos', () => {
    todos.add('foo');
    todos.add('bar');
    todos.add('baz');
    todos.toggle('foo');

    expect(todos.active.size).toBe(2);
  });

  it('lists completed todos', () => {
    todos.add('foo');
    todos.add('bar');
    todos.add('baz');
    todos.toggle('foo');

    expect(todos.completed.size).toBe(1);
  });
});
