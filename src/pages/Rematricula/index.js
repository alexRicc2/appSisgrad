import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { CINZA_CLARO, COR_PRINCIPAL } from "../../estilos";
import NavBar from "../../components/Navbar";
export default function Rematricula({ navigation }) {
  return (
    <>
      <NavBar navigation={navigation} titulo="Rematricula" />
      <View style={style.container}>
        <View style={style.infoContainer}>
          <View style={style.estatus}>
            <Text style={style.text}>Fora do periodo de rematricula</Text>
          </View>
          <View style={style.info}>
            <Text style={style.text}>
              Confira o calendário escolar para mais informações
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: "-20%",
  },
  infoContainer: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: COR_PRINCIPAL,
  },
  estatus: {
    backgroundColor: CINZA_CLARO,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  info: {
    padding: 10,
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase",
  },
});
