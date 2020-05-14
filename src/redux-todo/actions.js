export function createItem() {
  const newTodo = { text: 'new item', done: false };
  return {
    type: 'CREATE_ITEM',
    newTodo,
  };
}

export function updateItem(index, item) {
  return {
    type: 'UPDATE_ITEM',
    index,
    item,
  };
}

export function deleteItem(index) {
  return {
    type: 'DELETE_ITEM',
    index,
  };
}
