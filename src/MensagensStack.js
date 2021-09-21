import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Mensagens from './pages/Mensagens';
import MensagemPage1 from './pages/MensagemPage/MensagemPage1';
import MensagemPage2 from './pages/MensagemPage/MensagemPage2';
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
          name='mensagemPage1'
          component={MensagemPage1}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='mensagemPage2'
          component={MensagemPage2}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}