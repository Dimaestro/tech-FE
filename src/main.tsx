import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@/context/ThemeContext.tsx";

// connection order is important
import './styles/reset.scss';
import './index.css';
import './styles/global.scss';

import App from "./components/App/App.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <StyledEngineProvider injectFirst>
          <ThemeProvider>
              <App />
          </ThemeProvider>
      </StyledEngineProvider>
  </StrictMode>,
)
