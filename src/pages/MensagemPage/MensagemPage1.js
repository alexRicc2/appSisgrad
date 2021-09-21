import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import { CINZA_CLARO } from '../../estilos';

const mensagemContent = {
  titulo: '15/09 - Link da Aula de Lab ED-2 às 14h',
  remetente: 'Camila Baleiro Okado Tamashiro',
  data: '15/09/2021 às 13:06',
  texto: `Boa tarde tudo bem?

  Segue o link da aula de Lab de ED às 14h
  
  Link: https://meet.google.com/gmp-dbvq-mdp
  
  Exercício para dia 30/09 : Implemente uma pilha como uma lista ligada
  
  Abraços,
  Camila
  `
}

export default function MensagemPage1(){
  return(
    <ScrollView style={styles.container}>
    <View style={styles.mensagemCard}>
      <View style={styles.mensagemHeader}>
        <Text style={styles.mensagemTitulo}>{mensagemContent.titulo}</Text>
      </View>
      <View style={styles.mensagemCorpo}>
        <Text>De: {mensagemContent.remetente}</Text>
        <Text>Recebida em: {mensagemContent.data}</Text>
        <Text>{mensagemContent.texto}</Text>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 28, backgroundColor: '#fff' },
  mensagemCard:{
    borderWidth: 1,
    borderColor: CINZA_CLARO,
    marginBottom: 50,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20

  },
  mensagemHeader: {
    backgroundColor: CINZA_CLARO,
    padding: 8,
  },
  mensagemTitulo: {
    fontWeight: 'bold'
  },
  mensagemCorpo:{
    padding: 8,
  }
})