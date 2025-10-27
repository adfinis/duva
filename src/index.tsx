import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-oidc-context';
import { App } from './App';
import { NotificationProvider } from './components/shared/Notification';
import { OidcConfig } from './config';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <NotificationProvider>
        <AuthProvider {...OidcConfig}>
          <App />
        </AuthProvider>
      </NotificationProvider>
    </React.StrictMode>,
  );
}
