import {StyleSheet} from 'react-native';
import {themes} from '../../assets/themes';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 143,
    height: 65,
    marginTop: 100,
  },
  header: {
    marginTop: 45,
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 25,
  },
  subtitle: {
    width: 256,
    height: 96,
    marginTop: 14,
  },
  form: {
    width: '90%',
    marginTop: 23,
    gap: 16,
  },
  button: {
    marginTop: 40,
    marginBottom: 18,
    width: '80%',
    height: 44,
    alignSelf: 'center',
  },
});
