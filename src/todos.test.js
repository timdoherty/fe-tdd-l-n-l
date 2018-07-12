import todos from './todos';

describe('todos', () => {
  beforeEach(() => {
    todos.clearAll();
  });

  it('lists all todos', () => {
    const todo = 'do the thing!';
    todos.add(todo);
    expect(todos.all.size).toBe(1);
    expect(todos.all.has(todo)).toBe(true);
  });

  it('adds a todo to the list', () => {
    const todo = 'do the thing!';
    todos.add(todo);
    expect(todos.all.get('do the thing!')).toBe(false);

    todos.toggle(todo);
    expect(todos.all.get('do the thing!')).toBe(true);
  });

  it('completes a todo from the list', () => {
    todos.add('foo');
    todos.add('bar');
    todos.add('baz');
    expect(todos.all.size).toBe(3);

    todos.toggle('foo');
    todos.toggle('bar');
    todos.clear();
    expect(todos.all.size).toBe(1);
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

  it('clears completed todos from the list', () => {
    todos.add('foo');
    todos.add('bar');
    todos.add('baz');
    todos.toggle('foo');

    expect(todos.all.size).toBe(3);
  });

});
