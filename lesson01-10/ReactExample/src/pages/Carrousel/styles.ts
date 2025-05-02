import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  item: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileStatusContainer: {
    width: '90%',
    height: 230,
    backgroundColor: "rgba(105,105, 105, 0.1)",
    borderRadius: 30,
    marginTop: 10,

  },
  iconContainer: {},
  icon: {},
  row: {},
  level: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  acIcon: {
    width: 160,
    height: 75,
  },
  bar: {},
  barStatus: {},
  medalBoxContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 230,
  },


});
