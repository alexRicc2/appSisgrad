import React, { useState, useEffect } from "react";
import Rotas from "./src/Rotas";
import { ThemeProvider } from "styled-components/native";
import { temaClaro, temaEscuro } from "./src/temas";
import { StatusBar } from "react-native";
import { COR_PRINCIPAL_ESCURA, COR_PRINCIPAL } from "./src/estilos";

export const ThemeContext = React.createContext();
export const ThemeToggle = React.createContext();
//TODO: useContext para o toggleTema e substituir o tema para o useContext em Rotas
export default function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  };
  useEffect(() => {
    tema
      ? StatusBar.setBackgroundColor(COR_PRINCIPAL)
      : StatusBar.setBackgroundColor(COR_PRINCIPAL_ESCURA);
  });
  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <ThemeContext.Provider value={tema}>
        <ThemeToggle.Provider value={toggleTema}>
        <Rotas/>
        </ThemeToggle.Provider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
