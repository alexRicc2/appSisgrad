import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { CINZA_CLARO, COR_PRINCIPAL } from "../../estilos";
import { Table, Row, Rows } from "react-native-table-component";
import NavBar from "../../components/Navbar";
export default function Intercambio({ navigation }) {
  function printa(value) {
    Alert.alert(
      "Intercambio",
      `País: luxemburgo\nBolsa: Não\nDuração Curta: Não`,
      [
        {
          text: "Inscrever-se",
          onPress: () => console.log("Inscrever-se pressed"),
        },
        {
          text: "Voltar",
          onPress: () => console.log("voltar pressed"),
        },
      ]
    );
  }
  const elementButton = (value) => (
    <TouchableOpacity onPress={() => printa(value)}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>button</Text>
      </View>
    </TouchableOpacity>
  );

  const [tableHead, setTableHead] = useState([
    "Título",
    "Info",
    "Inicio",
    "Fim",
  ]);
  const [tableData, setTableData] = useState([
    [
      "Edital Universidade de Luxemburgo 1.2022 (Retificação Publicada)",
      elementButton("eita"),
      "01/09/2021",
      "22/09/2021",
    ],
    [
      "Edital Universidade de Luxemburgo 1.2022 (Retificação Publicada)",
      elementButton("eita"),
      "01/09/2021",
      "22/09/2021",
    ],
  ]);

  return (
    <>
      <NavBar titulo="Rematricula" navigation={navigation} />
      <ScrollView style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
            <Row
              data={tableHead}
              flexArr={[2, 1, 1, 1, 1]}
              style={styles.head}
              textStyle={styles.text}
            />
            <Rows
              data={tableData}
              textStyle={styles.text}
              flexArr={[2, 1, 1, 1, 1]}
            />
          </Table>
        </View>
        <Text style={style.nome}>
          SALIENTAMOS QUE É POSSÍVEL INSCREVER-SE EM UM EDITAL DE CURTA DURAÇÃO
          E EM UM EDITAL GERAL DE INTERCÂMBIO (6 MESES OU MAIS) AO MESMO TEMPO.
        </Text>
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  nome: {
    marginBottom: 20,
    marginTop: 32,
    fontSize: 16,
  },
  headerContainer: {
    backgroundColor: CINZA_CLARO,
    paddingVertical: 20,
  },
  headerInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rowNota: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "20%",
  },
});
const styles = StyleSheet.create({
  container: { flex: 1, padding: 8, paddingTop: 0, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 3, textAlign: "center", fontSize: 13, color: COR_PRINCIPAL },
  btn: {
    width: 58,
    marginLeft: 10,
    height: 23,
    backgroundColor: COR_PRINCIPAL,
    borderRadius: 4,
  },
  btnText: { textAlign: "center", color: "#fff" },
});
