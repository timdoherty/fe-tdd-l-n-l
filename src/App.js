import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ToDosList from './ToDosList';
import todos from './todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FETDD TODOS</h1>
        </header>
        <div style={{ width: '800px', margin: 'auto', padding: '20px' }}>
          <ToDosList todos={todos} />
        </div>
      </div>
    );
  }
}

export default App;
