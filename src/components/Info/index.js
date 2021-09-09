import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export default function Info() {
  return (
    <>
    <View style={{ alignItems: 'center' }}>
      <Image style={style.icone} source={{
          uri: `https://github.com/alexRicc2.png`
        }} />
    </View>
    <View style={{marginBottom: 10}}>
    <View style={{ flexDirection: 'row' }}>
        <Ionicons name="person" size={24} color="black" style={{marginRight: 3}}/>
        <Text>Alex Ricardo Rodrigues Sant'Anna</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Entypo name="info-with-circle" size={24} color="black" style={{marginRight: 3}}/>
        <Text>RA: 10000210</Text>
      </View>
      <Text style={{ marginLeft: 27 }}>Graduando de Ciências da Computação</Text>
      <Text style={{ marginLeft: 27 }}>Percentual de Presença: 78%</Text>
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
    marginBottom: 10,
  },
})