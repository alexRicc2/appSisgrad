import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import NavBar from "../../components/Navbar";

export default function Solicitacoes({ navigation }) {
  return (
    <>
      <NavBar titulo="Solicitações" navigation={navigation} />
      <View style={style.container}>
        <View style={style.containerNome}>
          <Text style={style.nome}>Nome</Text>
        </View>

        <View style={{ alignSelf: "flex-start", marginLeft: "5%" }}>
          <TouchableOpacity style={style.containerArquivo}>
            <AntDesign
              name="pdffile1"
              size={24}
              color="red"
              style={style.iconeArquivo}
            />
            <Text>Atestado de frequência</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.containerArquivo}>
            <AntDesign
              name="pdffile1"
              size={24}
              color="red"
              style={style.iconeArquivo}
            />
            <Text>Atestado de matrícula</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.containerArquivo}>
            <AntDesign
              name="pdffile1"
              size={24}
              color="red"
              style={style.iconeArquivo}
            />
            <Text>Atestado para intercâmbio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.containerArquivo}>
            <AntDesign
              name="pdffile1"
              size={24}
              color="red"
              style={style.iconeArquivo}
            />
            <Text>Atestado de matrícula suspensa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.containerArquivo}>
            <AntDesign
              name="pdffile1"
              size={24}
              color="red"
              style={style.iconeArquivo}
            />
            <Text>Atestado de conclusão de curso</Text>
          </TouchableOpacity>
        </View>
      </View>
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
