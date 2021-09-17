import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import Notas from './pages/Notas';
import HorarioDeAulas from './pages/HorarioDeAulas';
import Rematricula from './pages/Rematricula';

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
          name='Rematricula'
          component={Rematricula}
          options={{headerShown: true}}
        />
        <Stack.Screen 
          name='notas'
          component={Notas}
          options={{headerShown: true}}
        />
        <Stack.Screen 
          name='horarioDeAulas'
          component={HorarioDeAulas}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}