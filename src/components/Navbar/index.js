import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { UsuarioContext } from '../common/UsuarioContext';

const Menu = styled.View`
  background-color: ${({theme}) => theme.principal};
  color: ${({theme}) => theme.text};
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  height: 58px;
`

export default function NavBar({navigation = null , titulo}){

  const { setUser} = useContext(UsuarioContext)
  return(
    <Menu>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        { navigation && 
        <Entypo 
          name="menu" 
          size={28} 
          style={{marginRight: 24}}
          color="white" onPress={() => navigation.toggleDrawer()} 
        />
        }
        
        <Text style={style.titulo}>{titulo}</Text>
      </View>
      { navigation &&
        <MaterialIcons 
          onPress={()=> setUser(null)}
          name="logout" size={28} color="white" />
      }
      </Menu>
  )
}

const style = StyleSheet.create({
  
  titulo:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18
  }
})