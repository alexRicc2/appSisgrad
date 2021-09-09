import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import NavBar from './src/components/Navbar';
import Info from './src/components/Info';
import Opcoes from './src/components/Opcoes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <View style={{ padding: 3 }}>
        <View>
          <Text style={styles.importText}>Sisgrad - Sistema de Graduação</Text>
        </View>
        <Info />
        <Opcoes />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  importText: {
    color: "#2196f3",
    fontSize: 20,
  },

});
