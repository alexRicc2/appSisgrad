import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import DadosCurso from './pages/DadosCurso';
import TestePaginaInicial from './pages/TestePaginaInicial';

const Stack = createStackNavigator();

export default function MyStack(){
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen 
          name='home'
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='dadosCurso'
          component={DadosCurso}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='teste'
          component={TestePaginaInicial}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}