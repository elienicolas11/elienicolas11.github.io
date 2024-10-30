import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root')); // Create a root
root.render(<App />); // Render the app
