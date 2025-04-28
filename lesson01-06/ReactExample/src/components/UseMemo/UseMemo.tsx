import {useMemo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import useAppContext from '../../hooks/useAppContext';

const products = [
  {id: 1, name: 'Produto 1', price: 10},
  {id: 2, name: 'Produto 2', price: 20},
  {id: 3, name: 'Produto 3', price: 30},
  {id: 4, name: 'Produto 4', price: 40},
  {id: 5, name: 'Produto 5', price: 50},
  {id: 6, name: 'Produto 6', price: 60},
];

export default function UseMemo() {
 const {count:{number, increment}} = useAppContext();
  const [sortBy, setSortBy] = useState<'price' | 'name'>('price');

  const sortedProducts = useMemo(() => {
    console.log('Ordenando produtos...');
    return products.sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }, [sortBy]);

  function calculate() {
    console.log('Calculando...');
    let total = 0;
    for (let i = 0; i < 100000; i++) {
      total += i;
    }
    return total;
  }

  // const data = calculate();

  const data = useMemo(() => {
    return calculate();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data}</Text>

      <CustomButton text="Incrementar" onClick={() => increment()} />

      <Text style={styles.text}>{sortBy}</Text>
      <CustomButton
        text="Alterar"
        onClick={() => setSortBy(prev => (prev === 'price' ? 'name' : 'price'))}
      />
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
