import React, { useContext } from 'react';
import TodoList from '../TodoList';
import stateContext from './stateContext';
import dispatchContext from './dispatchContext';
import { createItem, updateItem, deleteItem } from './actions';

export default function Container() {
  const state = useContext(stateContext);

  const { todos } = state;

  const dispatch = useContext(dispatchContext);

  const create = () => dispatch(createItem());
  const update = (index, item) => dispatch(updateItem(index, item));
  const deleteTodo = (index) => dispatch(deleteItem(index));

  return (
    <TodoList
      items={todos}
      createItem={create}
      updateItem={update}
      deleteItem={deleteTodo}
    />
  );
}
