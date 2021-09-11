import React from 'react';
import {Text, SafeAreaView, View, StatusBar} from 'react-native'

export default function About(){
  return(
    <>
<SafeAreaView style={{ flex: 0, backgroundColor: 'green' }} />
<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
<StatusBar barStyle="light-content" backgroundColor="#2196f3"/>
<View >
<Text>Welcome to React Native!</Text>
<Text >To get started, edit App.js</Text>
<Text >aaaa</Text>
</View>
</SafeAreaView>
</>
  )
}