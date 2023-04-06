import { createTheme } from "@mui/material";
import Overpass from "./Fonts/Overpass.ttf"

export const temaGlobal = createTheme({
  typography: {
    fontFamily: "Overpass",
    fontSize: 14
  },
  palette: {
    primary: {
      main: '#11141BFF',
    },
    secondary: {
      main: '#12c496',
    },
    info: {
      main: '#ffffff'
    },
    text: {
      primary: '#f2f4ff'
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
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontWeight: 400,
          fontFamily: "Overpass",
          src: `url(${Overpass}) format("truetype")`,
        }
      }
    }
  },
  shape: {
    borderRadius: 20
  }
});
