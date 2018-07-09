let list = new Map();

export default {
  get all() {
    return list;
  },
  get active() {
    return new Map(
      [...list.entries()].filter(
        ([key, val]) => val === false
      )
    );
  },
  get completed() {
    return new Map(
      [...list.entries()].filter(
        ([key, val]) => !!val
      )
    );
  },
  add(todo) {
    list.set(todo, false);
  },
  toggle(todo) {
    list.set(todo, !list.get(todo));
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
