import React from 'react';
import ReactDOM from 'react-dom/client';
import "./app/style/index.scss"
import App from './app/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

reportWebVitals();
