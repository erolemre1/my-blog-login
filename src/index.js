import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import {UserProvider} from "./contex";

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <UserProvider> <App /> </UserProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
