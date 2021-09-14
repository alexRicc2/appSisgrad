import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { COR_PRINCIPAL } from '../../estilos';

export default function CalendarioEscolar(){
  return(
    <View>
    <Calendar
        markingType={'period'}
        markedDates={{
          '2021-09-02': {disabled: true, startingDay: true, color: 'green'},
          '2021-09-03': {disabled: true, startingDay: false, endingDay: true, color: 'green'},
          '2021-09-06': {disabled: true, startingDay: true, color: COR_PRINCIPAL},
          '2021-09-07': {disabled: true, startingDay: false, endingDay: true, color: COR_PRINCIPAL},
          '2021-09-08': {disabled: true, startingDay: true, color: 'green'},
          '2021-09-09': {disabled: true, startingDay: false, color: 'green'},
          '2021-09-10': {disabled: true, startingDay: false, color: 'green'},
          '2021-09-13': {disabled: true, startingDay: false, color: 'green'},
          '2021-09-14': {disabled: true, startingDay: false, color: 'green'},
          '2021-09-15': {disabled: true, startingDay: false, color: 'green'},
          '2021-09-16': {disabled: true, startingDay: false, color: 'green'},
          '2021-09-17': {disabled: true, startingDay: false, color: 'green'},
          '2021-09-20': {disabled: true, startingDay: false, color: 'green'},
          '2021-09-21': {disabled: true, startingDay: false, color: 'green'},
          '2021-09-22': {disabled: true, startingDay: false, color: 'green'},
          '2021-09-23': {disabled: true, startingDay: false, color: 'green'},
          '2021-09-24': {disabled: true, startingDay: false, color: 'green'},
          '2021-09-27': {disabled: true, startingDay: false, color: 'green'},
          '2021-09-28': {selected: true, endingDay: false, color: 'green'},
          '2021-09-29': {disabled: true, startingDay: false, color: 'green'},
          '2021-09-30': {disabled: true, endingDay: true, color: 'green'},
        }}
    />
    <View style={style.legenda}>
      <View style={[style.status, {backgroundColor: 'green'}]}></View>
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
  )
}
const style = StyleSheet.create({
  legenda:{
    flexDirection: 'row',
    padding: 10,
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