import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from "./components/App/App.tsx";

import './styles/reset.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
