import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './Rotas';
import { Login } from './pages/Login';
import { UsuarioContext } from './components/common/UsuarioContext';
import { ThemeProvider } from "styled-components/native";
import { useTemaContext } from "./components/common/TemaContext";
import { temaClaro, temaEscuro } from './temas';

const Stack = createStackNavigator();

export default function RotasLogin(){
 
  const {user, setUser} = useContext(UsuarioContext)
  const { tema }= useTemaContext()

  return(
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
      >
        { user ?(
        <Stack.Screen
        name="Rotas"
        component={Rotas}
        options={{headerShown: false}}
      >
      </Stack.Screen>)
      : <Stack.Screen
      name='Login'
      component={Login}
      options={{headerShown: false}}
    >
    </Stack.Screen>
        }
        
        
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  )
}
