import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import Mensagem from '../../components/Mensagem';

const mensagensArray = [
  {
    id: 1,
    professor : 'Cleonice', 
    mensagem: 'Trabalho para amanha em dupl..', 
    horario: '16:30'
  },
  { 
    id: 2,
    professor : 'Leandro', 
    mensagem: 'Exame no domingo..', 
    horario: '17:32'
  },

]

export default function Mensagens(){
  return(
    <>
    <View style={style.container}>
    <FlatList
      data={mensagensArray}
      renderItem={({item}) => <Mensagem {...item}/>}
      keyExtractor={({id}) => String(id)}
    />
    </View>
    </>
  )
}
const style = StyleSheet.create({
  container: {
    paddingTop: 60,
  }
})