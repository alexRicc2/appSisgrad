import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { CINZA_CLARO } from "../../estilos";
import { Table, Row, Rows } from "react-native-table-component";
import NavBar from "../../components/Navbar";

export default function Notas({ navigation }) {
  const [tableHead, setTableHead] = useState(["Matéria", "Nota"]);
  const [tableData, setTableData] = useState([
    ["Calculo", 10],
    ["Lógica Matematica", 10],
    ["Fisica", 7],
    ["Matemática Discreta", 10],
    ["ICC", 10],
    ["ATP", 10],
    ["Metodologia Científica", 8.5],
    ["Lab ATP", 9],
    ["Média do Semestre 8.5"],
  ]);

  return (
    <>
      <NavBar titulo="Notas" navigation={navigation} />
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
