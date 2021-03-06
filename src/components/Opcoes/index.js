import React, { useContext } from "react";
import Opcao from "../Opcao";
import { StyleSheet, View } from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { iconesClaro, iconesEscuro } from "../../estilos";
import { createStackNavigator } from "@react-navigation/stack";
import temaContext from "../../Context/tema";

const Stack = createStackNavigator();

export default function Opcoes({ navigation }) {
  const tema = useContext(temaContext)
  return (
    <View style={style.opcoes}>
      <Opcao texto="Documentos" navigation={navigation} destino="Solicitações">
        <Ionicons
          name="documents"
          size={48}
          color={tema ? iconesClaro : iconesEscuro}
        />
      </Opcao>
      <Opcao texto="Notas" navigation={navigation} destino="Notas">
        <FontAwesome
          name="graduation-cap"
          size={48}
          color={tema ? iconesClaro : iconesEscuro}
        />
      </Opcao>
      <Opcao
        texto="Horário de aulas"
        navigation={navigation}
        destino="Horario De Aulas"
      >
        <FontAwesome5
          name="clock"
          size={48}
          color={tema ? iconesClaro : iconesEscuro}
        />
      </Opcao>
      <Opcao texto="Rematricula" navigation={navigation} destino="Rematricula">
        <MaterialIcons
          name="menu-book"
          size={48}
          color={tema ? iconesClaro : iconesEscuro}
        />
      </Opcao>
    </View>
  );
}

const style = StyleSheet.create({
  opcoes: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
