import {TouchableOpacity, Text} from 'react-native';
import { styles } from './styles';

interface TextProps {
  onPress: () => void;
  simpleText: string;
  boldText?: string;
}

export default function TextLink({onPress, simpleText, boldText}: TextProps) {
  return (
    <TouchableOpacity
        onPress={onPress}
        style={styles.container}
    >
      <Text style={styles.text}>
        {simpleText}
        {boldText && <Text style={[styles.text, styles.boldText]}>{boldText}</Text>}
      </Text>
    </TouchableOpacity>
  );
}
