import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface CustomButtonProps {
  text?: string;
  onClick?: () => void;
  color?: string;
}

export default function CustomButton({
  text = 'Teste',
  onClick = () => console.log('Teste'),
  color = 'red',
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        backgroundColor: color,
        padding: 10,
        borderRadius: 5,
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ color: '#fff' }}>{text}</Text>
    </TouchableOpacity>
  );
}
