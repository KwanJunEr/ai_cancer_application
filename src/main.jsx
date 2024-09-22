import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { PrivyProvider } from '@privy-io/react-auth';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PrivyProvider
      appId="cm0p24zs000spq0manegekhf8"
      config={{
        appearance: {
          theme: 'dark',
        },
      }}
    >
      <Router>
        <App />
      </Router>
    </PrivyProvider>
  </React.StrictMode>
);
