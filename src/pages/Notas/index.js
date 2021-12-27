import React, { useState, useContext } from "react";
import { StyleSheet, FlatList} from "react-native";
import { CINZA_CLARO, COR_PRINCIPAL, COR_PRINCIPAL_ESCURA } from "../../estilos";
import NavBar from "../../components/Navbar";
import styled from 'styled-components/native'
import { PeriodoNota } from "./PeriodoNotas";

const Container = styled.View`
flex: 1; 
padding: 16px;
padding-top: 0;
background-color: ${({theme})=>theme.body};
`
const periodos = [
  {
    periodo: '1 série - 1 periodo',
    id: 1
  },
  {
    periodo: '1 série - 2 periodo',
    id: 2
  },
  {
    periodo: '2 série - 1 periodo',
    id: 3
  },
  {
    periodo: '2 série - 2 periodo',
    id: 4
  },
  {
    periodo: '3 série - 1 periodo',
    id: 5
  },
  {
    periodo: '3 série - 2 periodo',
    id: 6
  },
]

export default function Notas({ navigation }) {

  return (
    <>
      <NavBar titulo="Notas" navigation={navigation} />
      <Container>
        <FlatList
          contentContainerStyle={{flexGrow: 1}}
          data={periodos}
          renderItem={({item})=> <PeriodoNota {...item} />}
          keyExtractor={({id})=> String(id)}
        >
        </FlatList>
        
      </Container>
    </>
  );
}

const style = StyleSheet.create({
  periodo: {
    marginBottom: 12,
    marginTop: 32,
    textAlign: "center",
    fontSize: 18,
  },
  headerContainer: {
    backgroundColor: COR_PRINCIPAL,
    paddingVertical: 20,
  },
  headerInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rowNota: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "20%",
  },
});

