import React from 'react';

const CHECKED = '☑';
const UNCHECKED = '☐';

function TodoItem(props) {
  const {
    text,
    checked,
    onClick,
    remove,
  } = props;
  const classes = checked ? 'TodoItem Checked' : 'TodoItem';

  return (
    <div className={classes}>

      <button type="button" className="Checkbox" onClick={onClick}>
        {checked ? CHECKED : UNCHECKED}
      </button>

      <span className="Text">
        {text}
      </span>

      <button type="button" className="RemoveButton" onClick={remove}>
        X
      </button>

    </div>
  );
}

export default TodoItem;
