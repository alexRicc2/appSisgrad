import "react-native-gesture-handler";
import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";
import HistoricoEscolar from "./pages/HistoricoEscolar";
import FrequenciaNotas from "./pages/FrequenciaNotas";
import CalendarioEscolar from "./pages/CalendarioEscolar";
import Rematricula from "./pages/Rematricula";
import DadosCurso from "./pages/DadosCurso";
import HorarioDeAulas from "./pages/HorarioDeAulas";
import Solicitacoes from "./pages/Solicitacoes";
import Intercambio from "./pages/Intercambio";
import { COR_PRINCIPAL, COR_PRINCIPAL_ESCURA } from "./estilos";
import Configuracoes from "./pages/Configuracoes";
import Notas from "./pages/Notas";
import MensagensStack from "./MensagensStack";
import { ThemeContext } from "../App";

const Drawer = createDrawerNavigator();

export default function Rotas() {
  const tema = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          drawerStyle: {
            backgroundColor: tema ? "white" : COR_PRINCIPAL_ESCURA,
          },
          drawerLabelStyle: { color: tema ? COR_PRINCIPAL : "white" },
          headerShown: false,
        }}
      >
        <Drawer.Screen name="Inicio" component={Home} />
        <Drawer.Screen name="Dados do Curso" component={DadosCurso} />
        <Drawer.Screen name="Notas" component={Notas} />
        <Drawer.Screen name="Horario De Aulas" component={HorarioDeAulas} />
        <Drawer.Screen name="Histórico Escolar" component={HistoricoEscolar} />
        <Drawer.Screen name="Frequencia e Notas" component={FrequenciaNotas} />
        <Drawer.Screen
          name="Calendario Escolar"
          component={CalendarioEscolar}
        />
        <Drawer.Screen name="Rematricula" component={Rematricula} />
        <Drawer.Screen name="Intercâmbio" component={Intercambio} />
        <Drawer.Screen name="Solicitações" component={Solicitacoes} />
        <Drawer.Screen
          name="Mensagens"
          component={MensagensStack}
          options={{
            headerStyle: {
              backgroundColor: COR_PRINCIPAL,
            },
            headerTintColor: "#fff",
            headerShown: true,
          }}
        />
        <Drawer.Screen name="Configurações" component={Configuracoes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
