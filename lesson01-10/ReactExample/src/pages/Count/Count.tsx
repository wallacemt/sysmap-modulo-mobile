import {View} from 'react-native';
import {styles} from './style';
import {Text, TextInput} from 'react-native';
import {useState} from 'react';
import useAppContext from '../../hooks/useAppContext';
import CustomButton from '../../components/CustomButton/CustomButton';

export default function Count() {
  const {
    count: {number, sum, multiply, divide},
  } = useAppContext();
  const [num, setNum] = useState<number>(0);

  const onChange = (text: string) => {
    const value = Number(text);
    if (isNaN(value)) {
      setNum(0);
    } else {
      setNum(value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Count</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            placeholder="Enter a number"
            keyboardType="numeric"
            value={num.toString()}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton text="Sum" onClick={() => sum(num)} color="blue" />
          <CustomButton
            text="Multiply"
            onClick={() => multiply(num)}
            color="green"
          />
          <CustomButton text="Divide" onClick={() => divide(num)} color="red" />
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <Text style={{fontSize: 45, fontWeight: 'bold'}}>{number}</Text>
        </View>
      </View>
    </View>
  );
}

