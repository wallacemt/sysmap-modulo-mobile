import { StyleSheet } from "react-native";
import { themes } from "../../assets/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        width: '100%',
        height: 100,
        backgroundColor: themes.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        marginBottom: 20,
        borderEndEndRadius: 20,
        borderStartEndRadius : 20,
    },
    iconBox:{
        width: '100%',
        position: 'absolute',
        top: 25,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    title:{
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
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