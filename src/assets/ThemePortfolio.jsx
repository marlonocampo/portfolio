import React from 'react';
import { createTheme } from "@mui/material";

export const temaGlobal = createTheme({
  typography: {
    fontFamily: 'Quicksand',
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
    MuiButton:{
      styleOverrides:{
        root:{
          borderRadius: '20px',
          margin: '2em'
        }
      }
    }
  },
  shape:{
    borderRadius: 20
  }
});
