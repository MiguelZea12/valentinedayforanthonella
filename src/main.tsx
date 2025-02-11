import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ConditionsProvider } from "./context/ConditionsContext";
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConditionsProvider>
      <App />
    </ConditionsProvider>
  </StrictMode>
);
