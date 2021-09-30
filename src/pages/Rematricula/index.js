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
const TextStyled = styled.Text`
color: ${({theme})=> theme.text};
text-align: center;
`
const Info = styled.View`
background-color: ${({theme})=> theme.inside};
padding: 10px;
`

export default function Rematricula({ navigation }) {
  return (
    <>
      <NavBar navigation={navigation} titulo="Rematricula" />
      <Container>
        <View style={style.infoContainer}>
          <View style={style.estatus}>
            <Text style={style.text}>Fora do periodo de rematricula</Text>
          </View>
          <Info>
            <TextStyled>
              Confira o calendário escolar para mais informações
            </TextStyled>
          </Info>
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
    backgroundColor: COR_PRINCIPAL,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  info: {
    padding: 10,
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase",
    color: 'white',
  },
});
