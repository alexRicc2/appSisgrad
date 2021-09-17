import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Mensagens from './pages/Mensagens';
import TestePaginaInicial from './pages/TestePaginaInicial';
import MensagemPage from './pages/MensagemPage';
const Stack = createStackNavigator();

export default function MensagensStack(){
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator>
      <Stack.Screen 
          name='Mensagens'
          component={Mensagens}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='teste'
          component={MensagemPage}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}