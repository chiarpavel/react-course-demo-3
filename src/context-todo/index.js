import React, { useReducer } from 'react';
import stateContext from './stateContext';
import dispatchContext from './dispatchContext';
import reducer from './reducer';
import Container from './container';

function ContextTodo(props) {
  const { initialTodos } = props;
  const initialState = { todos: initialTodos };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>
        <Container />
      </stateContext.Provider>
    </dispatchContext.Provider>
  );
}

export default ContextTodo;
