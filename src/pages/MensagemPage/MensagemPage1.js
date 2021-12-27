import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { CINZA_CLARO, COR_PRINCIPAL, conteudoEscuro} from '../../estilos';
import styled from 'styled-components';
import { useContext } from 'react/cjs/react.development';
import { AntDesign } from '@expo/vector-icons';
import { TemaContext } from '../../components/common/TemaContext';
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
const Container = styled.ScrollView`
flex: 1;
padding: 16px;
padding-top: 28px;
background-color: ${({theme})=> theme.body};
`

const TextStyled = styled.Text`
color: ${({theme})=> theme.text};
`
const TextStyledTitulo = styled.Text`
color: ${({theme})=> theme.text};
font-weight: bold;
`
export default function MensagemPage1({navigation}){
  const {tema} = useContext(TemaContext);
  return(
    <Container>
    <View style={[styles.mensagemCard, {borderColor: tema? CINZA_CLARO: COR_PRINCIPAL}]}>
      <View style={[styles.mensagemHeader, {backgroundColor: tema? CINZA_CLARO: COR_PRINCIPAL}]}>
        <TextStyledTitulo>{mensagemContent.titulo}</TextStyledTitulo>
      </View>
      <View style={[styles.mensagemCorpo, {backgroundColor: tema? '#fff': conteudoEscuro}]}>
        <TextStyled>De: {mensagemContent.remetente}</TextStyled>
        <TextStyled>Recebida em: {mensagemContent.data}</TextStyled>
        <TextStyled>{mensagemContent.texto}</TextStyled>
      </View>
    </View>
    <TouchableOpacity style={styles.buttonBack} onPress={ () => {navigation.goBack()}}>
    <AntDesign name="back" size={20} color="white" />
      <Text style={{color: 'white'}}>Voltar</Text>
    </TouchableOpacity>
    
    </Container>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 28, backgroundColor: '#fff' },
  mensagemCard:{
    borderWidth: 1,
    borderColor: CINZA_CLARO,
    marginBottom: 20,
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
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20
  },
  buttonBack:{
    flexDirection: 'row',
    backgroundColor: COR_PRINCIPAL,
    padding: 10,
    justifyContent: 'center',
    width: 100,
    alignSelf: 'center',
    borderRadius: 10,
  }
})