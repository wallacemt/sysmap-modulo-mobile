import {StyleSheet} from 'react-native';
import {themes} from '../../assets/themes';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    lineHeight: 16,
    color: themes.colors.softBlack,
    fontFamily: themes.fonts.DMSans.regular,
  },
  boldText: {
    fontFamily: themes.fonts.DMSans.bold,
  },
});
