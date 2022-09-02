import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import fotoPerfil from '../Assets/Images/PerfilMarlon.jpg';
import { Box, Container, createTheme, Link, styled, ThemeProvider } from "@mui/material";
import GitHub from "@mui/icons-material/GitHub";

const BotonPrincipal = styled(Link)({
  fontSize: 14,
  textDecoration: 'none',
  fontWeight: 700,
  color: 'rgba(255,255,255,0.8)',
  transition: 'transform .3s',
  ":hover": {
    transform: 'scale(1.1)',
    color: '#fff',
  },
  ":active": {
    transform: 'scale(1.1)',
    color: '#c2ffeb',
  },
  background: 'none',
  flexGrow: 0
})

const BotonesLink = styled(Button)({
  borderRadius: 20,
  color: 'rgba(255,255,255,0.8)',
  margin: 'auto 1em',
  fontWeight: 500,
  ":hover": {
    background: 'rgba(0,0,0,0)',
    color: '#fff'
  },
  ":hover:after": {
    transform: 'scale(1,1)',
  },
  ":after": {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '0.2rem',
    left: 0,
    bottom: 0,
    background: 'rgba(47,255,190,0.8)',
    borderRadius: 20,
    transform: 'scale(0,1)',
    transition: 'transform 0.2s ease'
  },
  ":active": {
    color: 'rgba(47,255,190,0.8)',
    background: 'rgba(0,0,0,0)',
    boxShadow: 'none'
  }
})

const temaAppbar = createTheme({
  palette: {
    primary: {
      main: '#11141BFF'
    },
    secondary: {
      main: 'rgba(47,255,190,0.8)',
    }
  },
  typography: {
    fontSize: 14,
    fontFamily: 'Quicksand, Overpass Mono',
    fontWeightRegular: 400,
    fontWeightBold: 500,
    button: {
      textTransform: 'capitalize'
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(5px)',
          color: '#f2f4ff',
          boxShadow: 'none',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          overflow: "visible",
          minWidth: 'min-content'
        }
      }
    }
  }
})

export function AppBar1() {
  return (
    <ThemeProvider theme={temaAppbar}>
      <AppBar color={'transparent'}>
        <Container maxWidth={'md'}>
          <Toolbar sx={{margin: '0em 3em'}}>
            <BotonPrincipal href="#">
              Marlon Pérez
            </BotonPrincipal>
            <Box sx={{display: 'flex', justifyContent: 'center', flexGrow: 2}}>
              <BotonesLink disableRipple>
                Inicio
              </BotonesLink>
              <BotonesLink disableRipple>
                Servicios
              </BotonesLink>
              <BotonesLink disableRipple>
                Acerca de mi
              </BotonesLink>
            </Box>
            <Button
              sx={{
                ":hover": {
                  boxShadow: '1px 1px 5px 5px rgba(47,255,190,0.3)',
                  color: '#ffff'
                }
              }}
              variant={'contained'}
              color={'secondary'}
              size={'small'}

            >
              Contáctame
            </Button>
            <IconButton>
              <GitHub sx={{
                width: '1em',
                height: '1em',
                color: '#f2f4ff',
                ":hover": {
                  boxShadow: '15px #20d09b',
                  color: '#e6f2ff'
                }, flexGrow: 0
              }}
              />
            </IconButton>
            <IconButton>
              <Avatar
                alt="Marlon Pérez"
                sx={{width: '1.3em', height: '1.3em', flexGrow: 0}}
                src={fotoPerfil}
              />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>)
}