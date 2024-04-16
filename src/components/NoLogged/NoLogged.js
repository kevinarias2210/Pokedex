import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NoLogged () {
    const navigation = useNavigation();

    return(
        <View style={styles.favorite}>
            <View style={styles.favorite__container}>
                <View style={styles.favorite__Content}>
                    <Text style={styles.favorite__Text}>Para ver esta pantalla tienes que iniciar sesión</Text>
                </View>

                <View style={styles.contentButton}>
                    <Button style={styles.button} title="Ir al login" onPress={() => navigation.navigate("Account")} color={"black"} />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    favorite: {
        height: "100vh",
        backgroundColor: "#FF4034"
    },

    favorite__container: {
        height: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column"
    },

    favorite__Content: {
        marginVertical: 50,
        paddingHorizontal: 20
    },

    contentButton: {
        marginVertical: 50,
        paddingHorizontal: 20
    },

    favorite__Text: {
        fontSize: 30,
        color: "white",
        marginBottom: 10,
        textAlign: "center",
    },
})