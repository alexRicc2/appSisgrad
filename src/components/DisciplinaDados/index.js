import React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import { CINZA_CLARO } from '../../estilos';

export default function DisciplinaDados({disciplina, ch, equivalencia}) {
  return (
    <View style={[style.containerDisciplina, { backgroundColor: CINZA_CLARO }]}>
      <Text style={style.textoDisciplina}>{disciplina}</Text>
      <Text style={[style.textoDisciplina, { textAlign: 'center' }]}>{ch}</Text>
      <Text style={style.textoDisciplina}>{equivalencia}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  containerDisciplina:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  textoDisciplina:{
    width: '30%',
  }
})