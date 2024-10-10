// src/index.js

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Ensure this file exists and is imported
import { BrowserRouter } from 'react-router-dom'; // Make sure you are using BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
