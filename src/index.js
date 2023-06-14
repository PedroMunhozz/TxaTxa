import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Confete from './Confete';
import BackgroundMusic from './BackgroundMusic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>      
    <App />
    <Confete /> 
    <BackgroundMusic />
  </React.StrictMode>
);