import { View } from 'react-native';

export default function FlexBox() {
    return (
        <View style={{ paddingVertical: 20, height: "90%", width: "100%" }}>
            <View style={{ flex: 1, borderWidth: 1, borderColor: "red", height: "auto", width: 150}} />
            <View style={{ flex: 1, borderWidth: 1, borderColor: "red", height: "auto", width: 150}} />
            <View style={{ flex: 2, borderWidth: 1, borderColor: "red", height: "auto" , width: 150}} />
        </View>
    );
}