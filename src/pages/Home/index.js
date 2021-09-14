import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Info from '../../components/Info';
import Opcoes from '../../components/Opcoes';
import { COR_PRINCIPAL } from '../../estilos';

export default function Home() {
  return (
    <>
    <SafeAreaView style={{ flex: 0, backgroundColor: 'red' }} />
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={COR_PRINCIPAL}/>
      <StatusBar/>
      <View style={{ padding: 44 }}>
        <Info/>
        <Opcoes/>
      </View>
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
