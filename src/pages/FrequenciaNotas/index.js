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
padding-top: 30px;
background-color: ${({theme})=>theme.body};
`
const TextNome = styled.Text`
    color: ${({theme})=> theme.text};
    margin-bottom: 20px;
    margin-top: 32px;
    font-size: 16px;
    font-weight: bold;
`
export default function FrequenciaNotas({ navigation }) {
  const [tableHead, setTableHead] = useState([
    "Matéria",
    "Nota",
    "Frequência",
    "Aulas Dadas",
  ]);
  const [tableData, setTableData] = useState([
    ["Calculo", "-", "-", "0/60"],
    ["Lógica Matematica", "-", "100%", "5/60"],
    ["Fisica", "-", "-", "0/60"],
    ["Matemática Discreta", "-", "87%", "7/60"],
    ["ICC", "-", "-", "0/30"],
    ["ATP", "-", "-", "0/60"],
    ["Metodologia Científica", "-", "100%", "5/60"],
    ["Lab ATP", "-", "-", "0/30"],
  ]);
  const {tema} = useContext(TemaContext)
  return (
    <>
      <NavBar titulo="Frequências e Notas" navigation={navigation} />
      <Container>
        <TextNome>
          Alex Ricardo Rodrigues Sant'Anna | CC2014 - Bacharelado em Ciência da
          Computação - Integral
        </TextNome>
        <Text style={style.periodo}>2º Semestre/2021</Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: COR_PRINCIPAL }}>
          <Row data={tableHead} style={styles.head} textStyle={[styles.text, {color: 'white'}]} />
          <Rows data={tableData} textStyle={[styles.text, {color: tema? 'black': 'white'}]} />
        </Table>
      </Container>
    </>
  );
}

const style = StyleSheet.create({
  nome: {
    marginBottom: 20,
    marginTop: 32,
    fontSize: 16,
    fontWeight: "bold",
  },
  periodo: {
    color: COR_PRINCIPAL,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 10,
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
  head: { height: 40, backgroundColor: COR_PRINCIPAL },
  text: { margin: 6, textAlign: "center" },
});
