import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './components/App';
import Work from './components/Work';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} /> 
      <Route path="/work" element={<Work />} /> 
    </Routes>
  </BrowserRouter>
);