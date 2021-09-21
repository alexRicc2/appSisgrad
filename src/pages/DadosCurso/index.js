import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import TabelaDados from '../../components/TabelaDados';
import { TABELA_DISCIPLINAS_ARRAY } from '../../Dados/disciplinas';

export default function DadosCurso(){
  return(
    <View style={style.container}>

    {/* <Text style={style.title}>Bacharelado em Ciências da computação</Text> */}

    <FlatList 
    contentContainerStyle={{ flexGrow: 1 }}
      data={TABELA_DISCIPLINAS_ARRAY}
      renderItem={({item}) => <TabelaDados {...item}/>}
      keyExtractor={({id}) => String(id)}
    />

    </View>
    
  )
}

const style = StyleSheet.create({
  title: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginBottom: 16,
  },
  container:{
    flex: 1,
  },
 

  
})