import React from 'react';

import ReactDOM from 'react-dom';

import './components/css/style.css'; 

import App from './components/App'; 

import AuthProvider from './components/contexts/Auth';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>

     <AuthProvider>
      <App />
    </AuthProvider> 
    {/* <App /> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
