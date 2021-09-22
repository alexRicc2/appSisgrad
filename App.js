import React from 'react';
import Rotas from './src/Rotas';
import { ThemeProvider } from 'styled-components/native';
import { temaClaro, temaEscuro } from './src/temas';
export default function App(){
  return(
    <ThemeProvider theme={temaClaro}>
    <Rotas/>
    </ThemeProvider>
  )
}