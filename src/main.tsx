import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@/context/ThemeContext.tsx';
import { LanguageProvider } from '@/context/LanguageContext.tsx';
import '@utils/i18n/i18n.ts';
import App from './components/App/App.tsx';

import '@styles/index.css';
import '@styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <LanguageProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LanguageProvider>
    </StyledEngineProvider>
  </StrictMode>,
);
