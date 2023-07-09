import { createTheme } from "@mui/material";

export const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#122138',
    },
    secondary: {
      main: '#12c496',
    },
    info: {
      main: '#ffffff'
    },
    text: {
      primary: '#e1e9f5'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
        }
      }
    },
  },
  shape: {
    borderRadius: 20
  }
})