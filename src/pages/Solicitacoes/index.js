import React, {useContext} from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import NavBar from "../../components/Navbar";
import styled from "styled-components/native";
import { ThemeContext } from "../../../App";
import { COR_PRINCIPAL } from "../../estilos";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.body};
`
const TextNome = styled.Text`
  font-size: 22px;
  color: ${({theme})=> theme.text};
`
const TextInfo = styled.Text`
  color: ${({theme})=> theme.text};
`

export default function Solicitacoes({ navigation }) {
  const temaContext = useContext(ThemeContext)
  return (
    <>
      <NavBar titulo="Solicitações" navigation={navigation} />
      <Container>
        <View style={[style.containerNome, {borderColor: temaContext? '#ccc': '#fff'}]}>
          <TextNome>Nome</TextNome>
        </View>

        <View style={{ alignSelf: "flex-start", marginLeft: "5%" }}>
          <TouchableOpacity style={style.containerArquivo}>
            <AntDesign
              name="pdffile1"
              size={24}
              color={temaContext? 'red': COR_PRINCIPAL}
              style={style.iconeArquivo}
            />
            <TextInfo>Atestado de frequência</TextInfo>
          </TouchableOpacity>
          <TouchableOpacity style={style.containerArquivo}>
            <AntDesign
              name="pdffile1"
              size={24}
              color={temaContext? 'red': COR_PRINCIPAL}
              style={style.iconeArquivo}
            />
            <TextInfo>Atestado de matrícula</TextInfo>
          </TouchableOpacity>
          <TouchableOpacity style={style.containerArquivo}>
            <AntDesign
              name="pdffile1"
              size={24}
              color={temaContext? 'red': COR_PRINCIPAL}
              style={style.iconeArquivo}
            />
            <TextInfo>Atestado para intercâmbio</TextInfo>
          </TouchableOpacity>
          <TouchableOpacity style={style.containerArquivo}>
            <AntDesign
              name="pdffile1"
              size={24}
              color={temaContext? 'red': COR_PRINCIPAL}
              style={style.iconeArquivo}
            />
            <TextInfo>Atestado de matrícula suspensa</TextInfo>
          </TouchableOpacity>
          <TouchableOpacity style={style.containerArquivo}>
            <AntDesign
              name="pdffile1"
              size={24}
              color={temaContext? 'red': COR_PRINCIPAL}
              style={style.iconeArquivo}
            />
            <TextInfo>Atestado de conclusão de curso</TextInfo>
          </TouchableOpacity>
        </View>
      </Container>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  containerNome: {
    borderColor: "#ccc",
    borderBottomWidth: 1,
    width: "90%",
    paddingLeft: 17,
    marginTop: 36,
  },
  nome: {
    fontSize: 22,
    color: "#333",
  },
  containerArquivo: {
    flexDirection: "row",
    marginTop: 16,
  },
  iconeArquivo: {
    marginRight: 6,
  },
});
