import React from "react";
import { Container, Grid, keyframes, styled, Typography } from "@mui/material";
import { AppBar1 } from "./AppBar.jsx";
import Button from "@mui/material/Button";

const Item = styled(Grid)({
  bgcolor: '#152331',
  borderRadius: '5px',
  padding: '10px',
  color: '#f2f4ff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontsize: 40,
  width: '100%',
  height: '400px'
})

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
`

const Efecto = styled(Typography)({
  fontSize: 25,
  overflow: 'visible',
  justifyContent: 'flex',
  "::before": {
    content: '"<"',
    animation: `${parpadeo} 2s infinite`,
    fontWeight: 700,
    color: '#37ffc0'
  },
  "::after": {
    content: '"/>"',
    animation: `${parpadeo} 2s infinite`,
    fontWeight: 700,
    color: '#37ffc0',
  }
})

export function App() {
  return (
    <>
      <Container sx={{display: 'flex', justifyContent: 'center'}}>
        <AppBar1/>
        <Grid
          container
          display={'grid'}
          gridTemplateColumns={'repeat(auto-fit, minmax(min(100%, 1000px), 1fr))'}
          gap={2}
          sx={{maxWidth: '80%', marginTop: 10}}
        >
          <Item>
            <Typography
              variant="body1"
            >
              Letras del portafolio
            </Typography>
          </Item>
          <Item>
            <Typography
              variant={'body1'}
              textAlign={'center'}
            >
              Hola soy Marlon,
            </Typography>
            <Efecto
              body={'body1'}
              sx={{fontFamily: 'Overpass Mono', fontSize: 30, textAlign: 'center'}}
            >
              Desarrollador de Sistemas
            </Efecto>
            <Typography
              body={'body1'}
              textAlign={'center'}
            >
              Me dedico a practicar y aprender todo el tiempo, para dar soluciones a necesidades con herramientas
              geniales 😎!
            </Typography>
            <Button
              variant={'outlined'}
              color={'secondary'}
            >
              Descargar CV
            </Button>

          </Item>
        </Grid>
      </Container>
    </>
  )
}