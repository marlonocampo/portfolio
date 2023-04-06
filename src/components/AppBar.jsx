import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import fotoPerfil from "../assets/Images/PerfilMarlon.jpg";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  Link,
  styled,
  ThemeProvider,
} from "@mui/material";
import GitHub from "@mui/icons-material/GitHub";
import Overpass from "../assets/Fonts/Overpass.ttf";
import MenuIcon from "@mui/icons-material/MenuRounded";

const BtHome = styled(Link)({
  fontSize: 14,
  textDecoration: "none",
  fontWeight: 600,
  color: "rgba(255,255,255,0.8)",
  transition: "transform .3s",
  ":hover": {
    transform: "scale(1.1)",
    color: "#fff",
  },
  ":active": {
    transform: "scale(1.1)",
    color: "rgba(47,255,190,0.8)",
  },
  background: "none",
  flexGrow: 0,
});

const BotonesLink = styled(Button)({
  borderRadius: 20,
  color: "rgba(255,255,255,0.8)",
  margin: "auto 1em",
  fontWeight: 500,
  fontSize: "14px",
  ":hover": {
    background: "rgba(0,0,0,0)",
    color: "#fff",
  },
  ":hover:after": {
    transform: "scale(1,1)",
  },
  ":after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "0.2rem",
    left: 0,
    bottom: 0,
    background: "rgba(47,255,190,0.8)",
    borderRadius: 20,
    transform: "scale(0,1)",
    transition: "transform 0.2s ease",
  },
  ":active": {
    color: "rgba(47,255,190,0.8)",
    background: "rgba(0,0,0,0)",
    boxShadow: "none",
  },
});

const temaAppbar = createTheme({
  palette: {
    primary: {
      main: "#11141BFF",
    },
    secondary: {
      main: "rgba(47,255,190,0.8)",
    },
  },
  typography: {
    fontFamily: "Overpass",
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightBold: 500,
    button: {
      textTransform: "capitalize",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(5px)",
          color: "#f2f4ff",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          overflow: "visible",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontWeight: 300,
          fontFamily: "Overpass",
          src: `url(${Overpass}) format("truetype")`,
        },
      },
    },
  },
});

export function AppBar1() {
  return (
    <ThemeProvider theme={temaAppbar}>
      <CssBaseline />
      <AppBar color={"transparent"}>
        <Container maxWidth={"md"} sx={{}}>
          <Toolbar>
            <Box sx={{ display: { sm: "flex", md: "none" } }}>
              <IconButton color={"secondary"}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <BtHome href='#'>MarlonPérez</BtHome>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <BotonesLink disableRipple>Inicio</BotonesLink>
              <BotonesLink disableRipple>Servicios</BotonesLink>
              <BotonesLink disableRipple>Acerca de mi</BotonesLink>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Button
                sx={{
                  ":hover": {
                    boxShadow: "1px 1px 5px 5px rgba(47,255,190,0.3)",
                    color: "#ffff",
                  },
                }}
                variant={"contained"}
                color={"secondary"}
                size={"small"}
              >
                Contáctame
              </Button>
              <IconButton>
                <GitHub
                  sx={{
                    width: "1em",
                    height: "1em",
                    color: "#f2f4ff",
                    ":hover": {
                      boxShadow: "15px #20d09b",
                      color: "#e6f2ff",
                    },
                    flexGrow: 0,
                  }}
                />
              </IconButton>
              <IconButton>
                <Avatar
                  alt='Marlon Pérez'
                  sx={{ width: "1.3em", height: "1.3em" }}
                  src={fotoPerfil}
                />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
