import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const TextStyled = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;

export default function Opcao({children, texto, navigation, destino}){

  const page = String(destino)
  return (

    <>
    <TextStyled>oioiiiiiiiiiiiiiiii</TextStyled>
    <TouchableOpacity style={style.opcao} onPress={()=> navigation.navigate(page)}>
      {children}
      <Text>{texto}</Text>
    </TouchableOpacity>
    </>
  )
}
const style = StyleSheet.create({
  opcao: {
    width: '48%',
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
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