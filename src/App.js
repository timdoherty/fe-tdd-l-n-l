import React, { Component } from 'react';
import logo from './procore-logo.png';
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
        <div style= {{ width: '75%', margin: '20px auto', textAlign: 'left' }}>
          <ToDosList todos={todos} />
        </div>
      </div>
    );
  }
}

export default App;
