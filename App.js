import React from 'react';
import Rotas from "./src/Rotas";
import { TemaProvider } from "./src/components/common/TemaContext";

export default function App() {
 
  return (
        <TemaProvider>
        <Rotas/>
        </TemaProvider>  
  );
}
