import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export default function Info() {
  return (
    <>
    <View style={{ alignItems: 'center'}}>
      <Image style={style.icone} source={{
          uri: `https://github.com/alexRicc2.png`
        }} />
    </View>
    <View style={{alignItems: 'center'}}>
    <View style={{marginBottom: '23%'}}>
    <View style={{ flexDirection: 'row' }}>
        <Ionicons name="person" size={18} color="black" style={{marginRight: 10}}/>
        <Text style={style.texto}>Alex Ricardo Rodrigues Sant'Anna</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Entypo name="info-with-circle" size={18} color="black" style={{marginRight: 10}}/>
        <Text style={style.texto}>RA: 10000210</Text>
      </View>
      <Text style={style.texto}>Graduando de Ciências da Computação</Text>
    </View>
    </View>
    </>
  )
}
const style = StyleSheet.create({
  icone: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginTop: 10,
    marginBottom: '17%',
  },
  texto: {
    paddingVertical: 2
  }
})