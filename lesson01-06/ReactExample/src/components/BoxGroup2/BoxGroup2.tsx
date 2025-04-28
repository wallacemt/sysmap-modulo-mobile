import { StyleSheet, View } from "react-native";

export default function BoxGroup2() {

    return (
        <View style={styles.container}>
            <View style={[styles.box]} />

        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    box: {
        height: 50,
        width: 100,
        borderRadius: 10,
        backgroundColor: "red",
    }
});