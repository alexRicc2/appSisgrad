import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import {Calendar} from 'react-native-calendars';
import { COR_PRINCIPAL } from '../../estilos';
import NavBar from '../../components/Navbar';
export default function CalendarioEscolar({navigation}){
  const diaLetivo = "#a7e0a3"
  return(
    <>
    <NavBar titulo='Calendario Escolar' navigation={navigation}/>
    <View>
    <Calendar
        markingType={'period'}
        markedDates={{
          '2021-09-02': {textColor: 'green',  color: diaLetivo},
          '2021-09-03': {textColor: 'green',  color: diaLetivo},
          '2021-09-06': {textColor: 'white',  color: COR_PRINCIPAL},
          '2021-09-07': {textColor: 'white',  color: COR_PRINCIPAL},
          '2021-09-08': {textColor: 'green',  color: diaLetivo},
          '2021-09-09': {textColor: 'green',  color: diaLetivo},
          '2021-09-10': {textColor: 'green',  color: diaLetivo},
          '2021-09-13': {textColor: 'green',  color: diaLetivo},
          '2021-09-14': {textColor: 'green',  color: diaLetivo},
          '2021-09-15': {textColor: 'green',  color: diaLetivo},
          '2021-09-16': {textColor: 'green',  color: diaLetivo},
          '2021-09-17': {textColor: 'green',  color: diaLetivo},
          '2021-09-20': {textColor: 'green',  color: diaLetivo},
          '2021-09-21': {textColor: 'green',  color: diaLetivo},
          '2021-09-22': {textColor: 'green',  color: diaLetivo},
          '2021-09-23': {textColor: 'green',  color: diaLetivo},
          '2021-09-24': {textColor: 'green',  color: diaLetivo},
          '2021-09-27': {textColor: 'green',  color: diaLetivo},
          '2021-09-28': {textColor: 'green',  color: diaLetivo},
          '2021-09-29': {textColor: 'green',  color: diaLetivo},
          '2021-09-30': {textColor: 'green',  color: diaLetivo},
        }}
    />
    <View style={style.legenda}>
      <View style={[style.status, {backgroundColor: diaLetivo}]}></View>
      <Text>Dia letivo</Text>
    </View>
    <View style={style.legenda}>
      <View style={[style.status, {backgroundColor: COR_PRINCIPAL}]}></View>
      <Text>Feriado</Text>
    </View>
    <View style={style.legenda}>
      <View style={[style.status, {backgroundColor: 'red'}]}></View>
      <Text>Recesso</Text>
    </View>
    </View>
      </>
  )
}
const style = StyleSheet.create({
  legenda:{
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 24,
    alignItems: 'center'
  },
  status:{
    width: 15,
    height: 15,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: 'green',
  },
})