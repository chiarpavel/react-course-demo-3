import React, { useState } from 'react';
import TodoList from '../TodoList';

function ContainerTodo(props) {
  const { initialTodos } = props;
  const [todos, setTodos] = useState(initialTodos || []);

  const createItem = () => {
    const newTodo = { text: 'new item', done: false };
    setTodos([...todos, newTodo]);
  };

  const updateItem = (index, item) => {
    setTodos([
      ...todos.slice(0, index),
      item,
      ...todos.slice(index + 1),
    ]);
  };

  const deleteItem = (index) => {
    setTodos([
      ...todos.slice(0, index),
      ...todos.slice(index + 1),
    ]);
  };

  return (
    <TodoList
      items={todos}
      createItem={createItem}
      updateItem={updateItem}
      deleteItem={deleteItem}
    />
  );
}

export default ContainerTodo;
