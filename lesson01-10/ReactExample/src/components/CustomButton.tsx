import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
    text?: string;
    onClick?: () => void;
}

export default function CustomButton({ text = "Teste", onClick = () => console.log("Teste") }: CustomButtonProps) {

    return (
        <TouchableOpacity
            onPress={onClick}
            style={{
                backgroundColor: "red",
                padding: 10,
                borderRadius: 5,
                width: 100,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text>{text}</Text>
        </TouchableOpacity>

    );
}