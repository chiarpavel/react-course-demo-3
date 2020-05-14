import React from 'react';
import './App.css';

import Header from './Header';
import Content from './Content';
import ContainerTodo from './container-todo';
import ContextTodo from './context-todo';
import ReduxTodo from './redux-todo';

const initialTodos = [
  {
    text: 'I\'m an item',
    done: false,
  },
  {
    text: 'I\'m also an item',
    done: false,
  },
];

function App() {
  return (
    <div className="App">
      <Header title="demo" />

      <Content>
        <ContainerTodo initialTodos={initialTodos} />
        <ContextTodo initialTodos={initialTodos} />
        <ReduxTodo />
      </Content>
    </div>
  );
}

export default App;
