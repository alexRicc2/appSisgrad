import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import About from './src/pages/About';

const Drawer = createDrawerNavigator();
const MyTheme = {
  dark: false,
  colors: {
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
        },
        drawerLabelStyle: {
          color: '#2196f3',
        },
      }}>
        <Drawer.Screen name="Home" component={Home} options={{
          headerStyle: {
            backgroundColor: '#2196f3',
          },
          headerTintColor: '#fff',
        }}/>
        <Drawer.Screen name="About" component={About} options={{
          headerStyle: {
            backgroundColor: '#2196f3',
          },
          headerTintColor: '#fff',
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
