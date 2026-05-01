import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserAuthenticationProvider } from './Context/UserAuthentication';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserAuthenticationProvider>
    <App />
    </UserAuthenticationProvider>
  </React.StrictMode>
);