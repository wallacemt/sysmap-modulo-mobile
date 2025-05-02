import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackParamList } from "../../routes/AppRoutes";


type HelloRouteParams = RouteProp<MainStackParamList, 'Hello'>;

export default function Hello() {

    const route = useRoute<HelloRouteParams>();
    const { name, isError } = route.params || { name: '', isError: false };
    return (
        <View>
            <View style={styles.root}>
                <Text style={[
                    styles.text,
                    isError && { color: "#FF0000", fontSize: 10 }
                ]}
                >
                    Hello {name}
                </Text>
            </View>
            {
                isError && <Text style={[styles.text, { marginLeft: 50, marginTop: 10 }]}>Informe corretamente</Text>
            }
        </View>
    )

}