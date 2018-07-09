import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ToDosList from './ToDosList';
import todos from './todos';

class App extends Component {
  render() {
    return (
      <div style={{ width: '800px', margin: 'auto', padding: '20px' }}>
        <ToDosList todos={todos} />
      </div>
    );
  }
}

export default App;
