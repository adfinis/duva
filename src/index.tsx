import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-oidc-context';
import { App } from './App';
import { OidcConfig } from './config';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <AuthProvider {...OidcConfig}>
        <App />
      </AuthProvider>
    </React.StrictMode>,
  );
}
