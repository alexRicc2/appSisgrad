import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
export function Login({navigation}){
  return(
    <>
    <Text>
      Login page
    </Text>
    <TouchableOpacity onPress={()=> navigation.navigate('Inicio')}>
      <Text>Link</Text>
      </TouchableOpacity>
    </>
  )
}