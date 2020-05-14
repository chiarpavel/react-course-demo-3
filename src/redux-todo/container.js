import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from '../TodoList';
import { createItem, updateItem, deleteItem } from './actions';

export default function Container() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

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
