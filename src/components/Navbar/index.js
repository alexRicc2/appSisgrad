import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

const Menu = styled.View`
  background-color: ${({theme}) => theme.principal};
  color: ${({theme}) => theme.text};
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  height: 58px;
`

export default function NavBar({navigation , titulo}){
  return(
    <Menu>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Entypo name="menu" size={28} color="white" onPress={() => navigation.toggleDrawer()} style={{marginRight: 24}}/>
        <Text style={style.titulo}>{titulo}</Text>
      </View>
        <MaterialIcons name="logout" size={28} color="white" />
    </Menu>
  )
}

const style = StyleSheet.create({
  menu: {
    backgroundColor: '#2196f3',
    color: '#fff',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 58
  },
  titulo:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18
  }
})