import React, { useState, useEffect } from "react";
import Rotas from "./src/Rotas";
import { ThemeProvider } from "styled-components/native";
import { temaClaro, temaEscuro } from "./src/temas";
import { StatusBar } from "react-native";
import { COR_PRINCIPAL_ESCURA, COR_PRINCIPAL } from "./src/estilos";
import temaContext from "./src/Context/tema";
import ToggleTemaContext from "./src/Context/temaToggle";


export default function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  };
  useEffect(() => {
    tema
      ? StatusBar.setBackgroundColor(COR_PRINCIPAL)
      : StatusBar.setBackgroundColor(COR_PRINCIPAL_ESCURA);
  }, [tema]);
  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
        <temaContext.Provider value={tema}>
        <ToggleTemaContext.Provider value={toggleTema}>
        <Rotas/>
        </ToggleTemaContext.Provider>
        </temaContext.Provider>
    </ThemeProvider>
  );
}
