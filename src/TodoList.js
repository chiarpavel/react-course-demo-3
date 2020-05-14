import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  const {
    items,
    createItem,
    updateItem,
    deleteItem,
  } = props;

  return (
    <div className="TodoList">
      <div className="ItemsContainer">
        {items.map((item, index) => (
          <TodoItem
            key={index}
            checked={item.done}
            text={item.text}
            onClick={() => updateItem(index, { ...item, done: !item.done })}
            remove={() => deleteItem(index)}
          />
        ))}
      </div>

      <button type="button" className="CreateButton" onClick={createItem}>
        Create New Item
      </button>
    </div>
  );
}

export default TodoList;
