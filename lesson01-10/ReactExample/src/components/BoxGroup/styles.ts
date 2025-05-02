import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
// const width = Dimensions.get("window").width;
// const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 50,
        width: width * 0.9,
        gap: 10
    },
    box: {
        height: 50,
        width: "30%",
        borderRadius: 10,
    },
});