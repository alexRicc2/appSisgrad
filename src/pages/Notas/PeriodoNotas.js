import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import { Table, Row, Rows } from "react-native-table-component";
import { TemaContext } from '../../components/common/TemaContext';
import { COR_PRINCIPAL, COR_PRINCIPAL_ESCURA } from '../../estilos';
import { StyleSheet} from "react-native";

const TextPeriodo = styled.Text`
  margin-bottom: 12px;
  margin-top: 32px;
  text-align: center;
  font-size: 18px;
  color: ${({theme})=> theme.text};
`

export function PeriodoNota({periodo}){

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

  const {tema} = useContext(TemaContext)

  return(
    <>
    <TextPeriodo>{periodo}</TextPeriodo>
    <Table borderStyle={{ borderWidth: 2, borderColor: tema? COR_PRINCIPAL : COR_PRINCIPAL_ESCURA}}>
      <Row data={tableHead} style={[styles.head, {backgroundColor: tema? COR_PRINCIPAL: COR_PRINCIPAL_ESCURA}]} textStyle={styles.text} />
      <Rows data={tableData} textStyle={[styles.text, {color: tema? 'black': 'white'} ]} />
    </Table>
    </>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 0, backgroundColor: "#fff" },
  head: { height: 40},
  text: { margin: 6, textAlign: "center", color: 'white'},
})