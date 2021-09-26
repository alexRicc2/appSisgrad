import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const TextStyled = styled.Text`
  color: ${({ theme }) => theme.text};
`;
const OpcaoBotao = styled.View`
  width: 48%;
  height: 125px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-color: ${({theme}) => theme.inside};
  border-radius: 15px;
`

export default function Opcao({children, texto, navigation, destino}){

  const page = String(destino)
  return (

    <>
    <OpcaoBotao onPress={()=> navigation.navigate(page)}>
      {children}
      <TextStyled>{texto}</TextStyled>
    </OpcaoBotao>
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