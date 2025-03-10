import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { EligibilityProvider } from './context/EligibilityContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EligibilityProvider>
      <App />
    </EligibilityProvider>
  </React.StrictMode>
); 