import { createTheme } from '@mui/material'

export const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#122138'
    },
    secondary: {
      main: '#12c496'
    },
    info: {
      main: '#e1e9f5'
    },
    text: {
      primary: '#e1e9f5'
    }
  },
  typography: {
    fontFamily: 'overpass',
    fontSize: 14
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          textTransform: 'capitalize'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'overpass';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${'/src/assets/fonts/Overpass.woff2'}) format('woff2');
      `
    }
  },
  shape: {
    borderRadius: 20
  }
})
