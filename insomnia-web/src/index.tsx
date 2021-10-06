import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { ThemeProvider } from './Provider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
