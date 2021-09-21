import React from 'react';
import {TouchableOpacity,View, Text, StyleSheet} from 'react-native'
import { useState } from 'react';
import { CINZA } from '../../estilos';

export default function Mensagem({professor, mensagem, horario, mensagemPage, navigation}){
  const [lido, setLido] = useState('green')
  return(
    <TouchableOpacity style={style.container} onPress={() => {
      setLido('gray')
      navigation.navigate(mensagemPage)}}>
      <View style={[style.status , {backgroundColor: lido}]}></View>
      <View style={style.mensagem}>
      <Text style={style.professor}>{professor}</Text>
      <Text>{mensagem}</Text>
      </View>
      <Text>{horario}</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container:{
    backgroundColor: CINZA,
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
    color: '#333',
  },
  mensagem: {
    flexGrow: 1,
  }
})