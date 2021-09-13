import { StyleSheet } from 'react-native';

export default (lido) => StyleSheet.create({
  status:{
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: lido ? 'gray': 'green',
  },
})
