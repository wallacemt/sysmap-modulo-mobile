import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    title:{
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
        marginVertical: 20,
    },
    card: {
        backgroundColor: '#D9D9D9',
        width: '90%',
        height: 160,
        borderRadius: 10
    },
    description:{
        fontSize: 15,
        color: '#000000',
        fontWeight: 'medium',
    }
});