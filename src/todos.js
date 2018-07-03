let list = new Set();

export default {
  list,
  add(todo) {
    list.add(todo);
  },
  remove(todo) {
    list.delete(todo);
  },
  clear() {
    list.clear();
  }
};
