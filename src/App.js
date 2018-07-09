import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ToDosList from './ToDosList';
import todos from './todos';

class App extends Component {
  render() {
    return (
      <ToDosList todos={todos} />
    );
  }
}

export default App;
