import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
export default function NavBar(){
  return(
    <View style={style.menu}>
        <Entypo name="menu" size={34} color="white" />
        <MaterialIcons name="logout" size={34} color="white" />
    </View>
  )
}

const style = StyleSheet.create({
  menu: {
    backgroundColor: '#2196f3',
    color: '#fff',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between'
  },
})