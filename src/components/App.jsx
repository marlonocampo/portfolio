import React from "react";
import { Container, Grid, keyframes, styled, Typography } from "@mui/material";
import { AppBar1 } from "./AppBar.jsx";
import Button from "@mui/material/Button";

const Item = styled(Grid)({
  backgroundColor: "#152331",
  borderRadius: "5px",
  padding: "10px",
  color: "#f2f4ff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  overflow: "hidden",
});


const parpadeo = keyframes`
  0% {
    opacity: 1.0;
  }
  50% {
    opacity: 0.0;
  }
  100% {
    opacity: 1.0;
  }
`;

const Efecto = styled(Typography)({
  fontSize: 25,
  fontFamily: "Monospace",
  overflow: "visible",
  "::before": {
    content: '"<"',
    animation: `${parpadeo} 2s infinite`,
    fontWeight: 700,
    color: "#37ffc0",
  },
  "::after": {
    content: '"/>"',
    animation: `${parpadeo} 2s infinite`,
    fontWeight: 700,
    color: "#37ffc0",
  },
});

export function App() {
  return (
    <>
      <AppBar1 />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10em",
        }}
      >
        <Grid
          container
          display='grid'
          gridTemplateColumns={
            "repeat(auto-fit, minmax(min(100%, 400px), 1fr))"
          }
          gap={2}
        >
          <Item>
            <img src="../assets/Images/PerfilMarlon.jpg" alt="" />
          </Item>
          <Item>
            <Typography
              variant={'body1'}
              textAlign={'body'}
            >
              Hola soy Marlon,
            </Typography>
            <Efecto
              body={'body'}
              textAlign={'start'}
            >
              Programador de Sistemas
            </Efecto>
            <Typography body={'body1'}>
              Me dedico a practicar y aprender todo1 el tiempo, para dar
              soluciones a necesidades con herramientas geniales 😎!
            </Typography>
            <Button variant={"outlined"} color={"secondary"}>
              Descargar CV
            </Button>
          </Item>
        </Grid>
      </Container>
    </>
  );
}