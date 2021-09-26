import React, {useState, useEffect} from 'react';
import Rotas from './src/Rotas';
import { ThemeProvider } from 'styled-components/native';
import { temaClaro, temaEscuro } from './src/temas';
import { Text, StatusBar} from 'react-native'
import { COR_PRINCIPAL_ESCURA, COR_PRINCIPAL} from './src/estilos';


export default function App(){

  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
    
  }
  useEffect(() => {
    tema ? 
    StatusBar.setBackgroundColor(COR_PRINCIPAL) 
    :  StatusBar.setBackgroundColor(COR_PRINCIPAL_ESCURA);
  });
  return(
    <ThemeProvider theme={tema ? temaClaro:  temaEscuro}>
    <Rotas toggleTema={toggleTema} tema={tema}/>
    
    </ThemeProvider>
  )
}