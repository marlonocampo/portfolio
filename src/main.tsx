import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import { ThemeProvider } from '@emotion/react'
import { globalTheme } from './utils/Theme'
import { CssBaseline } from '@mui/material'
const main: HTMLElement | null = document.getElementById('main')

if (main == null) {
  throw new Error('Document Root Not Found!')
}
const app = createRoot(main)

app.render(
  <StrictMode>
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
)
