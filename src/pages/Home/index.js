import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Button } from 'react-native';
import Info from '../../components/Info';
import Opcoes from '../../components/Opcoes';
import { COR_PRINCIPAL,COR_PRINCIPAL_ESCURA } from '../../estilos';
import NavBar from '../../components/Navbar';
import styled from 'styled-components/native';

const HomeBody = styled.View`
  padding: 44px;
  background-color: ${({theme}) => theme.body};
`

export default function Home({navigation}) {
  return (
    <>
    <SafeAreaView style={{ flex: 0, backgroundColor: 'red' }} />
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={COR_PRINCIPAL}/>
    
      <StatusBar/>
      <NavBar titulo='HOME' navigation={navigation}/>
      <HomeBody>
        
        <Info/>
        <Opcoes navigation={navigation}/>      
      
      </HomeBody>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  importText: {
    color: COR_PRINCIPAL,
    fontSize: 20,
  },

});
