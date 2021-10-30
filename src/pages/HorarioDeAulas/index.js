import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { COR_PRINCIPAL } from '../../estilos';
import NavBar from '../../components/Navbar';
import styled from 'styled-components';
import temaContext from '../../Context/tema';
const Container = styled.ScrollView`
flex: 1; 
padding: 16px;
padding-top: 30px;
background-color: ${({theme})=>theme.body};
`
const TextAluno = styled.Text`
margin-bottom: 24px;
color: ${({theme})=>theme.text};
`
const TextLegenda = styled.Text`
color: ${({theme})=>theme.text};
`
export default function HorarioDeAulas({navigation}){
  
  const tema = useContext(temaContext)
  const [tableHead, setTableHead] = useState(['', 'SEG', 'TER', 'QUA','QUI','SEX'])
  const [tableData, setTableData] = useState([
  ['',     '1948S', '1949S','1955S','1948S'],
  ['',     '1948S', '1949S','1955S','1948S'],
  ['',     '',      '1949S','1955S','1950S'],
  ['',     '',      '1949S','1955S','1950S'],
  ['',     '',      '1949S','1955S','1950S'],
  ['',     '',      ''     ,'',     ''],
  ['',     '',      ''     ,'',     ''],
  ['1954S','1953S', '1951S','1952S',''],
  ['1954S','1953S', '1951S','1952S',''],
  ['1954S','1953S', '1951S','1952S',''],
  ['',     '1953S', '1954S','1952S',''],
  ['',     '1953S', '1954S','1952S',''],
  ['',     '1953S', '1954S','1952S',''],
  
])
  const [tableTitle, setTableTitle] = useState(['08:00', '09:00', '10:00', '11:00', '11:30', '12:00', '13:00', '14:00', '15:00','15:30','16:00', '16:30','17:00',])
  
  return(
    <>
    <NavBar titulo='Horário de Aulas' navigation={navigation}/>
    <Container>
    <TextAluno>Aluno: 201000000 - Alex Ricardo Rodrigues Sant'Anna | CC2014 - Bacharelado em Ciência da Computação - Integral</TextAluno>
        <Table borderStyle={{borderWidth: 1, borderColor:COR_PRINCIPAL}}>
          <Row data={tableHead} style={[styles.head]} textStyle={[styles.text, {color:'#fff'}]}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={tableTitle} style={{backgroundColor: tema? '#f6f8fa': COR_PRINCIPAL}}  textStyle={[styles.text, {color: tema? 'black': 'white'}]}/>
            <Rows data={tableData} flexArr={[1, 1, 1, 1, 1]} style={styles.row} textStyle={[styles.text, {color: tema? 'black': 'white'}]}/>
          </TableWrapper>
        </Table>
        <View style={styles.legenda}>
          <TextLegenda>1948S - Cálculo Numérico</TextLegenda>
          <TextLegenda>1949S - Estrutura de Dados II</TextLegenda>
          <TextLegenda>1950S - Laboratório de Cálculo Numérico</TextLegenda>
          <TextLegenda>1951S - Laboratório de Estrutura de Dados II</TextLegenda>
          <TextLegenda>1952S - Laboratório de Linguagem de Montagem</TextLegenda>
          <TextLegenda>1953S - Organização de Computadores</TextLegenda>
          <TextLegenda>1954S - Probabilidade e Estatística</TextLegenda>
          <TextLegenda>1955S - Projeto e Análise de Algoritmos</TextLegenda>
        </View>
    </Container>
    </>
  )
}
const styles = StyleSheet.create({
  aluno:{ marginBottom: 24, },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: COR_PRINCIPAL  },
  wrapper: { flexDirection: 'row' },
  title: { backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' },
  legenda: {marginTop: 24}
});