import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.menuText}>Menu</Text><Text style={styles.menuText}>Unesp</Text>
      </View>
      <View>
        <Text style={styles.importText}>Sisgrad - Sistema de Graduação</Text>
      </View>
      <View style={styles.opcoes}>
      <View style={styles.opcao}>
        <FontAwesome5 name="dice" size={24} color="black" />
        <Text>Meus Dados</Text>
      </View>
      <View style={styles.opcao}>
      <Entypo name="spreadsheet" size={24} color="black" />
        <Text>Consulta</Text>
      </View>
      <View style={styles.opcao}>
      <FontAwesome name="pencil" size={24} color="black" />
        <Text>Rematricula</Text>
      </View>
      <View style={styles.opcao}>
      <MaterialCommunityIcons name="handshake" size={24} color="black" />
        <Text>Solicitações</Text>
      </View>
      <View style={styles.opcao}>
      <Foundation name="shopping-bag" size={24} color="black" />
        <Text>Bolsas</Text>
      </View>
      <View style={styles.opcao}>
      <FontAwesome name="map" size={24} color="black" />
        <Text>Intercâmbio</Text>
      </View>
      <View style={styles.opcao}>
      <MaterialCommunityIcons name="android-messages" size={24} color="black" />
        <Text>Mensagens</Text>
      </View>
      <View style={styles.opcao}>
      <Ionicons name="person" size={24} color="black" />
        <Text>Perfil teste</Text>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:StatusBar.currentHeight
  },
  menu: {
    backgroundColor: '#2196f3',
    color: '#fff',
    flexDirection: 'row',
    padding: 10,
  },
  menuText: {
    color: '#fff',
  },
  importText:{
    color: "#2196f3",
    fontSize: 20,
  },
  opcao: {
    borderColor: '#2196f3',
    borderWidth: 5,
    width: '48%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8
  },
  opcoes:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }
});
