import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { ThemeProvider, RequestProvider } from './Provider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <RequestProvider>
        <App />
      </RequestProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
