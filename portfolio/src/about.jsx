import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import Works from './works.jsx';
ReactDOM.createRoot(document.getElementById('about')).render(
    <React.StrictMode>
        <App />
        <Works />
    </React.StrictMode>
);