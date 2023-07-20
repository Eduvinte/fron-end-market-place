import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/app.scss'
import { ContextProvider } from './contexts/AuthContextApp'
import { ContextProviderProducts } from './contexts/ProductsContextApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProviderProducts>
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
  </ContextProviderProducts>
);


