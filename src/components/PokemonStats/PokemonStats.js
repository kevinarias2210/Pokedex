import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { map, capitalize } from "lodash";

export default function PokemonStats(props){
    const { stats } = props;
    const barStyle = (num) => {
        const color = num > 49 ? "#00ac17" : "#ff3e3e";
        
        return({
            backgroundColor: color,
            width: `${num}%`
        })
    }

    return(
        <View style={styles.content}>
            <Text style={styles.title}>Hola</Text>
            {map(stats, (item, index) => (
                <View key={index} style={styles.block}>
                    <View style={styles.blockTitle}>
                        <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
                    </View>
                    <View style={styles.blockInfo}>
                        <Text style={styles.number}>{item.base_stat}</Text>
                    </View>
                    <View style={styles.bgBar}>
                        <View style={[styles.bar, barStyle(item.base_stat)]}/>
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        marginTop: 40,
        marginBottom: 80,
        paddingHorizontal: 20,
    },

    title: {
        paddingBottom: 5,
        fontSize: 20,
        fontWeight: "bold"
    },

    block: {
        paddingVertical: 5,
        flexDirection: "row",
    },

    blockTitle:{
        width: "30%",
    },

    statName: {
        fontSize: 12,
        color: "#6B6B6B"
    },

    blockInfo:{
        width: "20%",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10
    },

    number: {
        width: "20%",
        fontSize: 12
    },

    bgBar:{
        backgroundColor: "#dedede",
        width: "50%",
        height: 10,
        marginTop: 5,
        borderRadius: 20,
        overflow: "hidden"
    },
    
    bar:{
        height: 10,
        borderRadius: 20
    }
})