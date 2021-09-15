import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import HistoricoEscolar from './pages/HistoricoEscolar';
import FrequenciaNotas from './pages/FrequenciaNotas';
import CalendarioEscolar from './pages/CalendarioEscolar';
import Rematricula from './pages/Rematricula';
import Mensagens from './pages/Mensagens';
import DadosCurso from './pages/DadosCurso';
import HorarioDeAulas from './pages/HorarioDeAulas';
import Solicitacoes from './pages/Solicitacoes';
import Intercambio from './pages/Intercambio';
import { COR_PRINCIPAL } from './estilos';
import Configuracoes from './pages/Configuracoes';
import MyStack from './Stack';

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
export default function Rotas() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName="Inicio"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
        },
        drawerLabelStyle: {
          color: COR_PRINCIPAL,
        },
      }}>
        <Drawer.Screen name="Inicio" component={MyStack} options={{
          headerStyle: {
            backgroundColor: COR_PRINCIPAL,
          },
          headerTintColor: '#fff',
        }}/>
        
        <Drawer.Screen name="Dados do Curso" component={DadosCurso} options={{
          headerStyle: {
            backgroundColor: COR_PRINCIPAL,
          },
          headerTintColor: '#fff',
        }}/>
           <Drawer.Screen name="Horario De Aulas" component={HorarioDeAulas} options={{
             headerStyle: {
               backgroundColor: COR_PRINCIPAL,
             },
             headerTintColor: '#fff',
           }}/>
         <Drawer.Screen name="Histórico Escolar" component={HistoricoEscolar} options={{
          headerStyle: {
            backgroundColor: COR_PRINCIPAL,
          },
          headerTintColor: '#fff',
        }}/>
        <Drawer.Screen name="Frequencia e Notas" component={FrequenciaNotas} options={{
          headerStyle: {
            backgroundColor: COR_PRINCIPAL,
          },
          headerTintColor: '#fff',
        }}/>
        <Drawer.Screen name="Calendario Escolar" component={CalendarioEscolar} options={{
          headerStyle: {
            backgroundColor: COR_PRINCIPAL,
          },
          headerTintColor: '#fff',
        }}/>
        <Drawer.Screen name="Rematricula" component={Rematricula} options={{
          headerStyle: {
            backgroundColor: COR_PRINCIPAL,
          },
          headerTintColor: '#fff',
        }}/>
        <Drawer.Screen name="Mensagens" component={Mensagens} options={{
          headerStyle: {
            backgroundColor: COR_PRINCIPAL,
          },
          headerTintColor: '#fff',
        }}/>
         <Drawer.Screen name="Intercâmbio" component={Intercambio} options={{
          headerStyle: {
            backgroundColor: COR_PRINCIPAL,
          },
          headerTintColor: '#fff',
        }}/>
        <Drawer.Screen name="Solicitações" component={Solicitacoes} options={{
          headerStyle: {
            backgroundColor: COR_PRINCIPAL,
          },
          headerTintColor: '#fff',
        }}/>
        <Drawer.Screen name="Configurações" component={Configuracoes} options={{
          headerStyle: {
            backgroundColor: COR_PRINCIPAL,
          },
          headerTintColor: '#fff',
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
    );
}


