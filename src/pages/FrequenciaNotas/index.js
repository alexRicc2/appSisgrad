import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import { CINZA_CLARO, COR_PRINCIPAL } from '../../estilos';
import { Table, Row, Rows } from 'react-native-table-component';

export default function FrequenciaNotas(){

  const [tableHead, setTableHead] = useState(['Matéria', 'Nota', 'Frequência', 'Aulas Dadas'])
  const [tableData, setTableData] = useState([
    ['Calculo', '-', '-', '0/60'],
    ['Lógica Matematica', '-', '100%', '5/60'],
    ['Fisica', '-', '-', '0/60'],
    ['Matemática Discreta', '-', '87%', '7/60'],
    ['ICC', '-', '-', '0/30'],
    ['ATP', '-', '-', '0/60'],
    ['Metodologia Científica', '-', '100%', '5/60'],
    ['Lab ATP', '-' , '-', '0/30'],
  ])
  return(
    <ScrollView style={styles.container}>
      <Text style={style.nome}>Alex Ricardo Rodrigues Sant'Anna | CC2014 - Bacharelado em Ciência da Computação - Integral</Text>
      <Text style={style.periodo}>2º Semestre/2021</Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={tableData} textStyle={styles.text}/>
        </Table> 
        
    </ScrollView>
  )
}

const style = StyleSheet.create({
  nome:{
    marginBottom: 20,
    marginTop: 32,
    fontSize: 16,
    fontWeight: 'bold'
  },
  periodo:{
    color: COR_PRINCIPAL,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 10
  },
  headerContainer:{
    backgroundColor: CINZA_CLARO,
    paddingVertical: 20
  },
  headerInfo:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  rowNota:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '20%'
  }
})
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 0, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 , textAlign: 'center'}
});