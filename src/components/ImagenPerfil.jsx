import React from "react";

import { Box } from "@mui/system";
import "../assets/Styles/fotoPerfilEstilo.css";
import fotoPerfilPrincipal  from "../assets/Images/fotoPerfilPrincipal.png";
export function ImagenPerfil() {
  return (
    <>
      <Box className='contenedor'>
        <img src={fotoPerfilPrincipal} className='imagenPerfil' alt='Foto Perfil' />
      </Box>
    </>
  );
}
