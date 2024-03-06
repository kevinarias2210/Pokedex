import React from "react";
import { View, Text } from "react-native";


export default function Pokemon(props){
    const { naviton, route } = props
    console.log(route)
    return(
        <View>
            <Text>Este es un pokemon</Text>
        </View>
    )
}
