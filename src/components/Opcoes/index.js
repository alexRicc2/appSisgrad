import React from 'react';
import Opcao from '../Opcao';
import { StyleSheet, View } from 'react-native';
import { FontAwesome5, FontAwesome, Ionicons, 
 MaterialIcons } from '@expo/vector-icons';
import { COR_PRINCIPAL } from '../../estilos';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Opcoes({navigation}) {
  return (
    <View style={style.opcoes}>
  

      <Opcao texto='Documentos' navigation={navigation} destino='notas'>
      <Ionicons name="documents" size={48} color={COR_PRINCIPAL} />
      </Opcao>
      <Opcao texto="Notas" navigation={navigation} destino='notas'>
      <FontAwesome name="graduation-cap" size={48} color={COR_PRINCIPAL} />
      </Opcao>
      <Opcao texto="Horário de aulas" navigation={navigation} destino='horarioDeAulas'>
      <FontAwesome5 name="clock" size={48} color={COR_PRINCIPAL} />
      </Opcao>
      <Opcao texto="Rematricula" navigation={navigation} destino='Rematricula'>
      <MaterialIcons name="menu-book" size={48} color={COR_PRINCIPAL} />
      </Opcao>
    </View>
  )
}

const style = StyleSheet.create({
  opcoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
})