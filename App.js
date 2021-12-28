import React from 'react';
import { TemaProvider } from "./src/components/common/TemaContext";
import RotasLogin from './src/RotasLogin';
import { UsuarioProvider } from './src/components/common/UsuarioContext';
export default function App() {
 
  return (
        <TemaProvider>
        <UsuarioProvider>
        <RotasLogin/>
        </UsuarioProvider>
        </TemaProvider>  
  );
}
