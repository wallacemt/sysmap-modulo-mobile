import {View, TextProps} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {styles} from './styles';

interface TitleProps extends TextProps {
  fontSize?: number;
  lineHeight?: number;
}

export default function Title({
  children,
  fontSize,
  lineHeight,
  ...props
}: TitleProps) {
  return (
    <Text 
        style={[
            styles.title,
            fontSize ? {fontSize: fontSize} : {fontSize: 32},
            lineHeight ? {lineHeight: lineHeight} : {lineHeight: 36},
        ]}
        {...props}>
      {children}
    </Text>
  );
}
