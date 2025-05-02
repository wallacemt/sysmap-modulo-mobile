import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../CustomButton/CustomButton";

export default function UseState() {

    const [number, setNumber] = useState<number>(100);
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {number}
            </Text>
            <CustomButton
                text="Incrementar"
                onClick={() => setNumber((prev) => prev + 1)}
            />
        </View>
    )

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
    }
});