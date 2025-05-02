import {useRef, useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import useAppContext from '../../hooks/useAppContext';

export default function UseRef() {
  const {
    count: {number, increment},
  } = useAppContext();
  const numberRef = useRef<number>(0);
  const prevTime = useRef(Date.now());
  const scrollViewRef = useRef<ScrollView>(null);

  function incrementState() {
    console.log('State: ', number);
    increment();
  }

  function incrementRef() {
    console.log('Ref: ', numberRef.current);
    numberRef.current += 1;
  }

  function handleClick() {
    const currentTime = Date.now();
    const diff = currentTime - prevTime.current;
    console.log('Diff: ', diff);
    prevTime.current = currentTime;
  }

  function scrollToEnd() {
    scrollViewRef.current?.scrollToEnd();
  }

  return (
    <ScrollView ref={scrollViewRef}>
      <View style={styles.container}>
        <Text style={styles.text}>{number}</Text>
        <CustomButton text="Incrementar" onClick={() => incrementState()} />
        <View style={{marginVertical: 10}} />
        <Text style={styles.text}>{numberRef.current}</Text>
        <CustomButton text="Incrementar" onClick={() => incrementRef()} />
        <View style={{marginVertical: 10}} />
        <Text style={styles.text}>{prevTime.current}</Text>
        <CustomButton text="Click" onClick={() => handleClick()} />
        <View style={{marginVertical: 10}} />
        <CustomButton text="Scroll to end" onClick={() => scrollToEnd()} />
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
        <Text style={styles.text}>{prevTime.current}</Text>
      </View>
    </ScrollView>
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
