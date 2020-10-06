import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />{/* Resetando o css de froma global */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
