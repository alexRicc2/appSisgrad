import React,{createContext, useState} from 'react';

export const UsuarioContext = createContext();

export function UsuarioProvider({children}){
  const [user, setUser] = useState(null)

  return(
    <UsuarioContext.Provider value={{user, setUser}}>
      {children}
    </UsuarioContext.Provider>
  )
}