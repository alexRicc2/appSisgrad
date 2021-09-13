import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import HistoricoEscolar from './src/pages/HistoricoEscolar';
import FrequenciaNotas from './src/pages/FrequenciaNotas';
import CalendarioEscolar from './src/pages/CalendarioEscolar';
import Rematricula from './src/pages/Rematricula';
import Mensagens from './src/pages/Mensagens';
import DadosCurso from './src/pages/DadosCurso';
import HorarioDeAulas from './src/pages/HorarioDeAulas';
import Solicitacoes from './src/pages/Solicitacoes';
import Intercambio from './src/pages/Intercambio';
const Drawer = createDrawerNavigator();
const MyTheme = {
  dark: false,
  colors: {
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
        },
        drawerLabelStyle: {
          color: '#2196f3',
        },
      }}>
        <Drawer.Screen name="Home" component={Home} options={{
          headerStyle: {
            backgroundColor: '#2196f3',
          },
          headerTintColor: '#fff',
        }}/>
        <Drawer.Screen name="Dados do Curso" component={DadosCurso} options={{
          headerStyle: {
            backgroundColor: '#2196f3',
          },
          headerTintColor: '#fff',
        }}/>
           <Drawer.Screen name="Horario De Aulas" component={HorarioDeAulas} options={{
             headerStyle: {
               backgroundColor: '#2196f3',
             },
             headerTintColor: '#fff',
           }}/>
         <Drawer.Screen name="Histórico Escolar" component={HistoricoEscolar} options={{
          headerStyle: {
            backgroundColor: '#2196f3',
          },
          headerTintColor: '#fff',
        }}/>
        <Drawer.Screen name="Frequencia e Notas" component={FrequenciaNotas} options={{
          headerStyle: {
            backgroundColor: '#2196f3',
          },
          headerTintColor: '#fff',
        }}/>
        <Drawer.Screen name="Calendario Escolar" component={CalendarioEscolar} options={{
          headerStyle: {
            backgroundColor: '#2196f3',
          },
          headerTintColor: '#fff',
        }}/>
        <Drawer.Screen name="Rematricula" component={Rematricula} options={{
          headerStyle: {
            backgroundColor: '#2196f3',
          },
          headerTintColor: '#fff',
        }}/>
        <Drawer.Screen name="Mensagens" component={Mensagens} options={{
          headerStyle: {
            backgroundColor: '#2196f3',
          },
          headerTintColor: '#fff',
        }}/>
         <Drawer.Screen name="Intercâmbio" component={Intercambio} options={{
          headerStyle: {
            backgroundColor: '#2196f3',
          },
          headerTintColor: '#fff',
        }}/>
        <Drawer.Screen name="Solicitações" component={Solicitacoes} options={{
          headerStyle: {
            backgroundColor: '#2196f3',
          },
          headerTintColor: '#fff',
        }}/>
        
      </Drawer.Navigator>
    </NavigationContainer>
    );
}
