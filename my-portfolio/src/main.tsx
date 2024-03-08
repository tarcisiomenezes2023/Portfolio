import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './app.scss';

const root = document.getElementById('root');
createRoot(root!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
