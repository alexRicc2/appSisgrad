import React from 'react';
import Opcao from '../Opcao';
import { StyleSheet, View } from 'react-native';
import { FontAwesome5, FontAwesome, Ionicons, 
 MaterialIcons } from '@expo/vector-icons';

export default function Opcoes() {
  return (
    <View style={style.opcoes}>

      <Opcao texto='Documentos'>
      <Ionicons name="documents" size={48} color="#2196F3" />
      </Opcao>
      <Opcao texto="Notas">
      <FontAwesome name="graduation-cap" size={48} color="#2196F3" />
      </Opcao>
      <Opcao texto="Horário de aulas">
      <FontAwesome5 name="clock" size={48} color="#2196F3" />
      </Opcao>
      <Opcao texto="Rematricula">
      <MaterialIcons name="menu-book" size={48} color="#2196F3" />
      </Opcao>
    </View>
  )
}

const style = StyleSheet.create({
  opcoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})