import {StyleSheet} from 'react-native';
import { themes } from '../../assets/themes';

export const styles = StyleSheet.create({
  label: {
    fontFamily: themes.fonts.DMSans.semiBold,
    fontSize: 16,
    color: themes.colors.softBlack,
    lineHeight: 20
  },
  required: {
    color: themes.colors.perigo, 
  },
  input: {
   marginTop: 6,
   width: '100%',
    height: 56,
    justifyContent: 'center',
    fontFamily: themes.fonts.DMSans.regular,
    fontSize: 16,
    lineHeight: 24,
    borderWidth: 1,
    borderColor: themes.colors.whiteA3,
    borderRadius: 8,
    color: themes.colors.black,
    paddingLeft: 20
  },
  error: {
    color: themes.colors.perigo,
  }
});
