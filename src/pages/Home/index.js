import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Info from '../../components/Info';
import Opcoes from '../../components/Opcoes';

export default function Home() {
  return (
    <>
    <SafeAreaView style={{ flex: 0, backgroundColor: 'red' }} />
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="#2196f3"/>
      <StatusBar/>
      <View style={{ padding: 3 }}>
        <View>
          <Text style={styles.importText}>Sisgrad - Sistema de Graduação</Text>
        </View>
        <Info />
        <Opcoes />
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  importText: {
    color: "#2196f3",
    fontSize: 20,
  },

});
