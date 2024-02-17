// React
import React from 'react';

// React DOM
import ReactDOM from 'react-dom/client';

// React error boundary
import { ErrorBoundary } from 'react-error-boundary';

// Components
import App from './App.jsx';
import ErrorFallback from './ui/ErrorFallback.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace('/')}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
