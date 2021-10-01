import React, {useContext} from 'react';
import {TouchableOpacity,View, Text, StyleSheet} from 'react-native'
import { useState } from 'react';
import { CINZA, conteudoEscuro } from '../../estilos';
import styled from 'styled-components';
import temaContext from '../../Context/tema';
const TextStyled = styled.Text`
color: ${({theme})=> theme.text};
`
const TextStyledProf = styled.Text`
color: ${({theme})=> theme.text};
font-weight: bold;
`
export default function Mensagem({professor, mensagem, horario, mensagemPage, navigation}){
  const [lido, setLido] = useState('green')
  const tema = useContext(temaContext)
  return(
    <TouchableOpacity style={[style.container, {backgroundColor: tema? CINZA: conteudoEscuro}]} onPress={() => {
      setLido('gray')
      navigation.navigate(mensagemPage)}}>
      <View style={[style.status , {backgroundColor: lido}]}></View>
      <View style={[style.mensagem, ]}>
      <TextStyledProf>{professor}</TextStyledProf>
      <TextStyled>{mensagem}</TextStyled>
      </View>
      <TextStyled>{horario}</TextStyled>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container:{

    flexDirection: 'row',
    minHeight: 50,
    marginHorizontal: 20,
    alignItems: 'center',
    borderColor: '#b4b4b4',
    marginTop: 12,
    borderWidth: 1,
    padding: 12,  
  },
  status:{
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: 'green',
  },
  professor:{
    fontWeight: 'bold',
    color: 'white',//333
  },
  mensagem: {
    flexGrow: 1,
  
  }
})