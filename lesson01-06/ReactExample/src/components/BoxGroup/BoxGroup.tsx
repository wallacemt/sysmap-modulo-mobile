import { View } from "react-native";
import { styles } from "./styles";

export default function BoxGroup() {

    return (
        <View style={styles.container}>
            
            <View style={[styles.box,{backgroundColor: 'red'}]} />
            <View style={[styles.box,{backgroundColor: 'green'}]} />
            <View style={[styles.box,{backgroundColor: 'blue'} ]} />
            <View style={[styles.box,{backgroundColor: 'red'}]} />
            <View style={[styles.box,{backgroundColor: 'green'}]} />
            <View style={[styles.box,{backgroundColor: 'blue'} ]} />
            <View style={[styles.box,{backgroundColor: 'red'}]} />
            <View style={[styles.box,{backgroundColor: 'green'}]} />
            <View style={[styles.box,{backgroundColor: 'blue'} ]} />
            <View style={[styles.box,{backgroundColor: 'red'}]} />
            <View style={[styles.box,{backgroundColor: 'green'}]} />
            <View style={[styles.box,{backgroundColor: 'blue'} ]} />
        </View>
    )
}