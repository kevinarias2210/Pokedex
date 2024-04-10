import React from "react";
import { View, Text, Button } from "react-native";
import { getPokemonFavorite } from "../api/favoriteStorage";


export default function Favorites(){
    const checkFavorites = async () => {
        const response = await getPokemonFavorite();
        console.log(response)
    }

    return(
        <View>
            <Text>Favorites</Text>
            <Button title="obtener favoritos" onPress={checkFavorites} />
        </View>
    )
}