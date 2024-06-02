import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import App from './App.jsx';
import './index.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
