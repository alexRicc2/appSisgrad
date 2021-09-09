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
    borderColor: '#2196f3',
    borderWidth: 5,
    width: '48%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8
  },
})