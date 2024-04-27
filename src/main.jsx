import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='relative'>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
