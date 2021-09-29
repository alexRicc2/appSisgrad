import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { CINZA_CLARO, COR_PRINCIPAL } from "../../estilos";
import NavBar from "../../components/Navbar";
import styled from "styled-components/native";

const Container = styled.View`
flex: 1;
justify-content: center;
background-color: ${({theme})=> theme.body};
`
const Estatus = styled.View`
  background-color: #ccc;
  padding: 15px 10px;
`

export default function Rematricula({ navigation }) {
  return (
    <>
      <NavBar navigation={navigation} titulo="Rematricula" />
      <Container>
        <View style={style.infoContainer}>
          <Estatus>
            <Text style={style.text}>Fora do periodo de rematricula</Text>
          </Estatus>
          <View style={style.info}>
            <Text style={style.text}>
              Confira o calendário escolar para mais informações
            </Text>
          </View>
        </View>
      </Container>
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
