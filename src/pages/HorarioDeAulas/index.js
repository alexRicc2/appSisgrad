import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { COR_PRINCIPAL } from '../../estilos';
import NavBar from '../../components/Navbar';
 
export default function HorarioDeAulas({navigation}){
  
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
    <ScrollView style={styles.container}>
    <Text style={styles.aluno}>Aluno: 201000000 - Alex Ricardo Rodrigues Sant'Anna | CC2014 - Bacharelado em Ciência da Computação - Integral</Text>
        <Table borderStyle={{borderWidth: 1, borderColor:COR_PRINCIPAL}}>
          <Row data={tableHead} style={[styles.head]} textStyle={[styles.text, {color:'#fff'}]}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={tableTitle} style={styles.title}  textStyle={styles.text}/>
            <Rows data={tableData} flexArr={[1, 1, 1, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
        <View style={styles.legenda}>
          <Text>1948S - Cálculo Numérico</Text>
          <Text>1949S - Estrutura de Dados II</Text>
          <Text>1950S - Laboratório de Cálculo Numérico</Text>
          <Text>1951S - Laboratório de Estrutura de Dados II</Text>
          <Text>1952S - Laboratório de Linguagem de Montagem</Text>
          <Text>1953S - Organização de Computadores</Text>
          <Text>1954S - Probabilidade e Estatística</Text>
          <Text>1955S - Projeto e Análise de Algoritmos</Text>
        </View>
    </ScrollView>
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