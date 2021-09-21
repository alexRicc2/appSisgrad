import React from 'react';
import {View, StyleSheet, FlatList, Button} from 'react-native'
import Mensagem from '../../components/Mensagem';

const mensagensArray = [
  {
    id: 1,
    professor : 'Cleonice', 
    mensagem: 'Trabalho para amanha em dupl..', 
    horario: '16:30',
    mensagemPage: 'mensagemPage1',
  },
  { 
    id: 2,
    professor : 'Leandro', 
    mensagem: 'Exame no domingo..', 
    horario: '17:32',
    mensagemPage: 'mensagemPage2',
  },
  { 
    id: 3,
    professor : 'Rodrigo', 
    mensagem: 'Oferta de estagio na prefeitur..', 
    horario: '11:30',
    mensagemPage: 'mensagemPage2',
  },
  { 
    id: 5,
    professor : 'Reitoria', 
    mensagem: 'Neste domingo a Nasa irá lan..', 
    horario: '10:30',
    mensagemPage: 'mensagemPage2',
  },
  { 
    id: 6,
    professor : 'Reitoria', 
    mensagem: 'Comunicado sobre os avanços ..', 
    horario: '20:00',
    mensagemPage: 'mensagemPage2',
  },
  { 
    id: 7,
    professor : 'Leandro', 
    mensagem: 'Exame no domingo..', 
    horario: '17:32',
    mensagemPage: 'mensagemPage2',
  },
  { 
    id: 8,
    professor : 'Leandro', 
    mensagem: 'Exame no domingo..', 
    horario: '17:32',
    mensagemPage: 'mensagemPage2',
  },
  { 
    id: 9,
    professor : 'Leandro', 
    mensagem: 'Exame no domingo..', 
    horario: '17:32',
    mensagemPage: 'mensagemPage2',
  },
  { 
    id: 10,
    professor : 'Leandrop', 
    mensagem: 'Exame no domingo..', 
    horario: '17:32',
    mensagemPage: 'mensagemPage2',
  },
  { 
    id: 11,
    professor : 'Leandro', 
    mensagem: 'Exame no domingo..', 
    horario: '17:32',
    mensagemPage: 'mensagemPage2',
  },
  { 
    id: 12,
    professor : 'Leandro', 
    mensagem: 'Exame no domingo..', 
    horario: '17:32',
    mensagemPage: 'mensagemPage2',
  },

]

export default function Mensagens({navigation}){
  return(
    <>
    <View style={style.container}>
    <FlatList
      contentContainerStyle={{ flexGrow: 1 }}
      data={mensagensArray}
      renderItem={({item}) => <Mensagem {...item} navigation={navigation}/>}
      keyExtractor={({id}) => String(id)}
    />
    </View>
    </>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})