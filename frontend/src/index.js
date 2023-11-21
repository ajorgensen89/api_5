import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/** Provide route, for navigation links, in NavBar.js */
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from './contexts/CurrentUserContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* Remove Providers from App.js and enter new context created. */}
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </Router>
  </React.StrictMode>,
  // Provide route to index.html page.
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
