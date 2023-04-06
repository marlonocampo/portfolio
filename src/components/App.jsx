import React from "react";
import {
  Container,
  Grid,
  keyframes,
  styled,
  Typography,
  Box,
} from "@mui/material";
import { AppBar1 } from "./AppBar.jsx";
import Button from "@mui/material/Button";
import { ImagenPerfil } from "./ImagenPerfil.jsx";

const Item = styled(Grid)({
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
          overflow: "hidden",
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
            <Typography variant={"body1"} textAlign={"center"}>
              Hola!, mi nombre es
            </Typography>
            <Typography variant={"h2"} color={"#37ffc0"} textAlign={"center"}>
              Marlon Ocampo,
            </Typography>
            <Efecto body={"h1"} textAlign='center'>
              Desarrollador de Sistemas
            </Efecto>
            <Typography sx={{ marginX: 5 }} body={"body"} textAlign={"center"}>
              Me dedico a practicar y aprender todo el tiempo para dar
              soluciones a necesidades con herramientas geniales 😎!
            </Typography>
            <Button
              sx={{ marginTop: "50px" }}
              variant={"outlined"}
              color={"secondary"}
            >
              Descargar CV
            </Button>
          </Item>
          <Item>
            <ImagenPerfil />
          </Item>
        </Grid>
      </Container>
      <Box
        marginTop='10em'
        display='flex'
        justifyContent='center'
        alignItems='center'
        paddingTop={'2em'}
        borderTop={'2px solid #ffff'}

      >
        <Typography variant="h4" color={'secondary'}>
          Habilidades
        </Typography>
      </Box>
    </>
  );
}
