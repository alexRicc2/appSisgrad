import React,{createContext, useState, useEffect, useContext} from 'react';
import { COR_PRINCIPAL, COR_PRINCIPAL_ESCURA } from '../../estilos';
import { StatusBar } from 'react-native';
export const TemaContext = createContext();

export const TemaProvider = ({children}) => {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  }


  return (
    <TemaContext.Provider value={{tema, setTema, toggleTema}}>
      {children}
    </TemaContext.Provider>
  )
}

export const useTemaContext =() =>{
  const {
    tema,
    setTema,
    toggleTema
  } = useContext(TemaContext)

  useEffect(()=>{
    tema 
      ? StatusBar.setBackgroundColor(COR_PRINCIPAL)
      : StatusBar.setBackgroundColor(COR_PRINCIPAL_ESCURA)    
  },[tema])

  return{
    tema,
    setTema,
    toggleTema
  }
}


  
// useEffect(() => {
//   tema
//     ? StatusBar.setBackgroundColor(COR_PRINCIPAL)
//     : StatusBar.setBackgroundColor(COR_PRINCIPAL_ESCURA);
// });