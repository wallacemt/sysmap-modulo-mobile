import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

export default function Position() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#D9D9D9", paddingTop: 25 }}>
            <View style={styles.children} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
                {
                    Array.from({ length: 20 }, (_, i) => (
                        <View key={i} style={{ backgroundColor: "aqua", height: 100, width: "100%", marginTop: 10 }} />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 100,
        marginHorizontal: 20,
    },
    children: {
        position: "absolute",
        backgroundColor: "red",
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        bottom: 30,
        right: 15,
        zIndex: 80,
    }
});