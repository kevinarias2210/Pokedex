import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { map } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function PokemonType(props){
    const { types } = props;

    return(
        <View style={styles.content}>
            {map(types, (item, index) => (
                <View key={index} style={{...styles.pill, backgroundColor: getColorByPokemonType(item.type.name)}}>{/* Se necesita una key para cada iteracion */}
                    <Text style={styles.textType}>
                        {item.type.name}
                    </Text>
                </View>
            ))}
        </View>
    )
}


const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    pill: {
        marginHorizontal: 10,
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
    },

    textType: {
        color: "white"
    }
})