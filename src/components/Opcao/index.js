import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Opcao({children, texto}){
  return (
    <View style={style.opcao}>
      {children}
      <Text>{texto}</Text>
    </View>
  )
}
const style = StyleSheet.create({
  opcao: {
    width: '46%',
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: '4%',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
})