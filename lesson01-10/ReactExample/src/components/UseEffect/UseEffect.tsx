import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import useAppContext from '../../hooks/useAppContext';

function Component() {
  useEffect(() => {
    console.log('O componente 2 foi montado');
    return () => {
      console.log('O componente 2 foi desmontado');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Componente</Text>
    </View>
  );
}

export default function UseEffect() {
  const {count:{number, increment}} = useAppContext();
  const [showComponent, setShowComponent] = useState<boolean>(false);

  useEffect(() => {
    console.log('O número foi atualizado: ', number);
  }, [number]);

  useEffect(() => {
    console.log('O componente foi montado');
  }, []);

  // useEffect(() => {
  //     const interval = setInterval(() => {
  //         console.log("Contando...");
  //     }, 1000);
  //     return () => {
  //         clearInterval(interval);
  //         console.log("O componente foi desmontado");
  //     }
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
      <CustomButton text="Incrementar" onClick={increment} />
      <View style={{marginVertical: 10}} />
      <CustomButton
        text="Mostrar"
        onClick={() => setShowComponent(prev => !prev)}
      />
      {showComponent && <Component />}
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
