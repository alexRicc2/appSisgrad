import React from 'react';
import Opcao from '../Opcao';
import { StyleSheet, View } from 'react-native';
import { FontAwesome5, FontAwesome, Ionicons, 
 MaterialIcons } from '@expo/vector-icons';
import { COR_PRINCIPAL, COR_PRINCIPAL_ESCURA } from '../../estilos';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from '../../../App';
import { useContext } from 'react/cjs/react.development';

const Stack = createStackNavigator();

export default function Opcoes({navigation}) {
  const temaContext = useContext(ThemeContext);
  return (
    <View style={style.opcoes}>
  

      <Opcao texto='Documentos' navigation={navigation} destino='Solicitações'>
      <Ionicons name="documents" size={48} color={temaContext ? COR_PRINCIPAL: 'white'} />
      </Opcao>
      <Opcao texto="Notas" navigation={navigation} destino='Notas'>
      <FontAwesome name="graduation-cap" size={48} color={temaContext ? COR_PRINCIPAL: 'white'} />
      </Opcao>
      <Opcao texto="Horário de aulas" navigation={navigation} destino='Horario De Aulas'>
      <FontAwesome5 name="clock" size={48} color={temaContext ? COR_PRINCIPAL: 'white'} />
      </Opcao>
      <Opcao texto="Rematricula" navigation={navigation} destino='Rematricula'>
      <MaterialIcons name="menu-book" size={48} color={temaContext ? COR_PRINCIPAL: 'white'} />
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