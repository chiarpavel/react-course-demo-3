function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_ITEM':
      return {
        todos: [...state.todos, action.newTodo],
      };

    case 'UPDATE_ITEM': {
      const { todos } = state;
      todos.splice(action.index, 1, action.item);
      return {
        todos: todos.slice(),
      };
    }

    case 'DELETE_ITEM':
      return {
        todos: [
          ...state.todos.slice(0, action.index),
          ...state.todos.slice(action.index + 1),
        ],
      };

    default:
      return state;
  }
}

export default reducer;
