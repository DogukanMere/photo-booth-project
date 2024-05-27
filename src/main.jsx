import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import { Helmet } from 'react-helmet';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='relative'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Home | Aura Photobooth</title>
        <link rel='aura photobooth' href='https://auraphotobooth.ca/' />
      </Helmet>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
