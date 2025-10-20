import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Inject Nunito Sans Regular via Google Fonts
const head = document.head || document.getElementsByTagName('head')[0];
if (head) {
  const preconnect1 = document.createElement('link');
  preconnect1.rel = 'preconnect';
  preconnect1.href = 'https://fonts.googleapis.com';
  head.appendChild(preconnect1);

  const preconnect2 = document.createElement('link');
  preconnect2.rel = 'preconnect';
  preconnect2.href = 'https://fonts.gstatic.com';
  preconnect2.crossOrigin = '';
  head.appendChild(preconnect2);

  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap';
  head.appendChild(stylesheet);
}

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
