import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserProvider from './context/userContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="53740620878-u4ej58ai4a48tt4u0htuc736fbnodbvr.apps.googleusercontent.com">
   <UserProvider>
    <App />
    </UserProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);


