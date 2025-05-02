import React, {use, useCallback, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';

import useAppContext from '../../hooks/useAppContext';

const C = React.memo(({onPress}: any) => {
  console.log('Componente C renderizado');
  return <CustomButton text="C" onClick={onPress} />;
});

export default function UseCallback() {
const {count:{number, increment}} = useAppContext();

  const memorizedFunction = useCallback(() => {
    console.log('Função memorizada chamada');
  }, []);

  useEffect(() => {
    console.log('A');
  }, [memorizedFunction]);

  // function memorizedFunction() {
  //     console.log("Função memorizada chamada");
  // }

  return (
    <View style={styles.container}>
      <C onPress={memorizedFunction} />
      <View style={{marginVertical: 10}} />
      <Text style={styles.text}>{number}</Text>
      <CustomButton text="Incrementar" onClick={() => increment()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    backgroundColor: '#D9D9D9',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    color: '#000',
  },
});
