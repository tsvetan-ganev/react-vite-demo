import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.tsx';

async function enableMocking() {
  const { worker } = await import('./mocks/browser.ts');

  return worker.start({ onUnhandledRequest: 'bypass' });
}

enableMocking()
  .then(() => {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  })
  .catch((error) => {
    console.error('ServiceWorker failed to load...', error);
  });
