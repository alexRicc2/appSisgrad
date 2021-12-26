import React,{createContext, useState, useEffect} from 'react';

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


  
// useEffect(() => {
//   tema
//     ? StatusBar.setBackgroundColor(COR_PRINCIPAL)
//     : StatusBar.setBackgroundColor(COR_PRINCIPAL_ESCURA);
// });