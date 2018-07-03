let list = new Map();

export default {
  get list() {
    return list;
  },
  add(todo) {
    list.set(todo, false);
  },
  toggle(todo, completed) {
    list.set(todo, completed);
  },
  clear() {
    [...list.entries()].forEach(([key, val]) => {
      if(val) {
        list.delete(key);
      }
    });
  },
  clearAll() {
    list.clear();
  }
};
