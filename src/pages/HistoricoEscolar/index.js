import React, { useState, useContext } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { CINZA_CLARO, COR_PRINCIPAL } from "../../estilos";
import { Table, Row, Rows } from "react-native-table-component";
import NavBar from "../../components/Navbar";
import styled from "styled-components";
import { TemaContext } from "../../components/common/TemaContext";
const Container = styled.ScrollView`
flex: 1; 
padding: 16px;
padding-top: 0;
background-color: ${({theme})=>theme.body};
`
const TextPeriodo = styled.Text`
  margin-bottom: 12px;
  margin-top: 32px;
  text-align: center;
  font-size: 18px;
  color: ${({theme})=> theme.text};
`

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

  const {tema} = useContext(TemaContext)
  return (
    <>
      <NavBar titulo="Histórico Escolas" navigation={navigation} />
      <Container>
        <TextPeriodo>1 série - 1 periodo</TextPeriodo>
        <Table borderStyle={{ borderWidth: 2, borderColor: COR_PRINCIPAL }}>
          <Row data={tableHead} style={styles.head} textStyle={[styles.text,{color: 'white'}]} />
          <Rows data={tableData} textStyle={[styles.text, {color: tema? 'black': 'white'}]} />
        </Table>
        <TextPeriodo>1 série - 2 periodo</TextPeriodo>
        <Table borderStyle={{ borderWidth: 2, borderColor: COR_PRINCIPAL }}>
          <Row data={tableHead} style={styles.head} textStyle={[styles.text,{color: 'white'}]} />
          <Rows data={tableData} textStyle={[styles.text, {color: tema? 'black': 'white'}]} />
        </Table>
        <TextPeriodo>2 série - 1 periodo</TextPeriodo>
        <Table borderStyle={{ borderWidth: 2, borderColor: COR_PRINCIPAL }}>
          <Row data={tableHead} style={styles.head} textStyle={[styles.text,{color: 'white'}]} />
          <Rows data={tableData} textStyle={[styles.text, {color: tema? 'black': 'white'}]} />
        </Table>
        <TextPeriodo>2 série - 2 periodo</TextPeriodo>
        <Table borderStyle={{ borderWidth: 2, borderColor: COR_PRINCIPAL }}>
          <Row data={tableHead} style={styles.head} textStyle={[styles.text,{color: 'white'}]} />
          <Rows data={tableData} textStyle={[styles.text, {color: tema? 'black': 'white'}]} />
        </Table>
        <TextPeriodo>Total</TextPeriodo>
        <Table borderStyle={{ borderWidth: 2, borderColor: COR_PRINCIPAL }}>
          <Row data={tableHeadGeral} style={styles.head} textStyle={[styles.text,{color: 'white'}]} />
          <Rows data={tableDataGeral} textStyle={[styles.text, {color: tema? 'black': 'white'}]} />
        </Table>
      </Container>
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
  head: { height: 40, backgroundColor: COR_PRINCIPAL},
  text: { margin: 6, textAlign: "center" },
});
