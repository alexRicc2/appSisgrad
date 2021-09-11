import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import NavBar from '../../components/Navbar';
import Info from '../../components/Info';
import Opcoes from '../../components/Opcoes';

export default function Home() {
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
