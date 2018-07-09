import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '@procore/core-css';
import '@procore/core-icons';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
