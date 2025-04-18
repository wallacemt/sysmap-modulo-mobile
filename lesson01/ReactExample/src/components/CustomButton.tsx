import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  text: string;
  onclick: () => void;
}

export default function CustomButton({text, onclick}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onclick}
      style={{
        backgroundColor: '#6200ea',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
      }}>
      <Text style={{color: '#fff', fontSize: 16}}>{text}</Text>
    </TouchableOpacity>
  );
}
