import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import { ThemeProvider } from './context/ThemeContext'
import '../src/assets/styles/index.css'
import { SidebarProvider } from './context/SidebarContext'

const main: HTMLElement | null = document.getElementById('main')

if (main == null) {
  throw new Error('Document Root Not Found!')
}
const app = createRoot(main)

app.render(
  <StrictMode>
    <ThemeProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>
)
