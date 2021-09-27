import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { CINZA_CLARO } from "../../estilos";
import { Table, Row, Rows } from "react-native-table-component";
import NavBar from "../../components/Navbar";

export default function HistoricoEscolar({ navigation }) {
  const [tableHead, setTableHead] = useState([
    "Matéria",
    "Nota",
    "Presença",
    "Conceito",
  ]);
  const [tableData, setTableData] = useState([
    ["Calculo", 10, 100, "aprovado"],
    ["Lógica Matematica", 10, 100, "aprovado"],
    ["Fisica", 7, 100, "aprovado"],
    ["Matemática Discreta", 100, 100, "aprovado"],
    ["ICC", 10, 100, "aprovado"],
    ["ATP", 10, 100, "aprovado"],
    ["Metodologia Científica", 8.5, 100, "aprovado"],
    ["Lab ATP", 9, 100, "aprovado"],
    ["Média do Semestre 8.5"],
  ]);

  const [tableHeadGeral, setTableHeadGeral] = useState([
    "Coeficiente de rendimento",
    "Média de presença",
  ]);
  const [tableDataGeral, setTableDataGeral] = useState([["8.575", "98%"]]);

  return (
    <>
      <NavBar titulo="Histórico Escolas" navigation={navigation} />
      <ScrollView style={styles.container}>
        <Text style={style.periodo}>1 série - 1 periodo</Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
        <Text style={style.periodo}>1 série - 2 periodo</Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
        <Text style={style.periodo}>2 série - 1 periodo</Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
        <Text style={style.periodo}>2 série - 2 periodo</Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
        <Text style={style.periodo}>Total</Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={tableHeadGeral}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={tableDataGeral} textStyle={styles.text} />
        </Table>
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  periodo: {
    marginBottom: 12,
    marginTop: 32,
    textAlign: "center",
    fontSize: 18,
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
  container: { flex: 1, padding: 16, paddingTop: 0, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6, textAlign: "center" },
});
