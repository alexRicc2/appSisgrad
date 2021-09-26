import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import HistoricoEscolar from './pages/HistoricoEscolar';
import FrequenciaNotas from './pages/FrequenciaNotas';
import CalendarioEscolar from './pages/CalendarioEscolar';
import Rematricula from './pages/Rematricula';
import DadosCurso from './pages/DadosCurso';
import HorarioDeAulas from './pages/HorarioDeAulas';
import Solicitacoes from './pages/Solicitacoes';
import Intercambio from './pages/Intercambio';
import { COR_PRINCIPAL, COR_PRINCIPAL_ESCURA } from './estilos';
import Configuracoes from './pages/Configuracoes';
import Notas from './pages/Notas';
import MensagensStack from './MensagensStack';

const Drawer = createDrawerNavigator();
const MyTheme = {
  colors: {
    background: COR_PRINCIPAL_ESCURA,
    card: 'rgb(255, 255, 255)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
export default function Rotas({toggleTema, tema}) {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Inicio"
      screenOptions={{
        drawerStyle: {
          backgroundColor: tema? 'white': COR_PRINCIPAL_ESCURA
        },
        drawerLabelStyle: {
          color: tema? COR_PRINCIPAL: 'white',
        },
        headerShown: false 
      }}>
       
        <Drawer.Screen name="Inicio" component={Home} tema={tema}/>
        
        <Drawer.Screen name="Dados do Curso" component={DadosCurso} options={{
          headerStyle: {
            backgroundColor: COR_PRINCIPAL,
          },
          headerTintColor: '#fff',
        }}/>
        <Drawer.Screen name="Notas" component={Notas} options={{
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
        <Drawer.Screen name="Mensagens" component={MensagensStack} options={{
          headerStyle: {
            backgroundColor: COR_PRINCIPAL,
          },
          headerTintColor: '#fff',
          headerShown: true
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
        <Drawer.Screen name="Configurações" component={Configuracoes} 
        initialParams={{ itemId: 42 , toggle: toggleTema}}
        >
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
    );
}


