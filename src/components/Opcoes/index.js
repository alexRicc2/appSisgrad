import React from 'react';
import Opcao from '../Opcao';
import { StyleSheet, View } from 'react-native';
import { FontAwesome5,  Entypo, FontAwesome, Ionicons, 
  MaterialCommunityIcons, Foundation } from '@expo/vector-icons';

export default function Opcoes() {
  return (
    <View style={style.opcoes}>

      <Opcao texto='Meus Dad'>
        <FontAwesome5 name="dice" size={24} color="black" />
      </Opcao>
      <Opcao texto="Consulta">
          <Entypo name="spreadsheet" size={24} color="black" />
      </Opcao>
      <Opcao texto="Rematricula">
          <FontAwesome name="pencil" size={24} color="black" />
      </Opcao>
      <Opcao texto="Solicitações">
          <MaterialCommunityIcons name="handshake" size={24} color="black" />
      </Opcao>
      <Opcao texto="Bolsas">
          <Foundation name="shopping-bag" size={24} color="black" />
        </Opcao>
        <Opcao texto="Intercâmbio">
          <FontAwesome name="map" size={24} color="black" />
        </Opcao>
        <Opcao texto="Mensagens">
          <MaterialCommunityIcons name="android-messages" size={24} color="black" />
        </Opcao>
        <Opcao texto="Perfil">
          <Ionicons name="person" size={24} color="black" />
        </Opcao>
    </View>
  )
}

const style = StyleSheet.create({
  opcoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }
})