import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import CustomButton from './src/components/CustomButton';
{
  console.log('ain lula');
}

function App() {
  return (
    <>
      <View style={{marginTop: 50, marginLeft: 20}}>
        <Text>App</Text>
        <Text>To get started, edit App.tsx</Text>

        <TextInput autoComplete="off" />

        <CustomButton text='Botão personalizado' onclick={() => console.log("opá")}/>

        <Button
          title="Click me"
          onPress={() => console.log('buttonPressed')}
          color="#6200ea"
        />
      </View>
    </>
  );
}

export default App;
