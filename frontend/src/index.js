import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/** Provide route, for navigation links, in NavBar.js */
import { BrowserRouter as Router } from "react-router-dom";

import { CurrentUserProvider } from './contexts/CurrentUserContext';
import { ProfileDataProvider } from './contexts/ProfileContext';
// import { BlurbDataProvider } from './contexts/BlurbContext';

ReactDOM.render(
  // <React.StrictMode> used in development mode.
  <Router>
    {/* Remove Providers from App.js and enter new Provider. */}
    <CurrentUserProvider>
      <ProfileDataProvider>
        {/* <BlurbDataProvider> */}
        <App />
        {/* </BlurbDataProvider> */}
      </ProfileDataProvider>
    </CurrentUserProvider>
  </Router>,
  // </React.StrictMode >,
  
  // Provide route to index.html page.
  document.getElementById('root')
);

reportWebVitals();
