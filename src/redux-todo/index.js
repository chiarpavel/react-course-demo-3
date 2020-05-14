import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Container from './container';

function ReduxTodo() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default ReduxTodo;
