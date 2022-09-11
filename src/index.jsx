import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '/src/components/App.jsx';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { temaGlobal } from './assets/ThemePortfolio.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ThemeProvider theme={temaGlobal}>
      <CssBaseline/>
      <App/>
    </ThemeProvider>
  </StrictMode>
);