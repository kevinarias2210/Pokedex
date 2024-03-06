import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import { PokemonCard } from "../PokemonCard/PokemonCard";


export default function PokemonList (props){
    const { pokemon } = props;

    return(//Este componente se está renderizando dentro de un SafeAreaView como padre, por eso no necesita un vio
        <FlatList 
        data={pokemon}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({item}) => <PokemonCard pokemon={item}/>}
        contentContainerStyle={styles.flastListContentContainer}
        />
    )
}

const styles = StyleSheet.create({
    flastListContentContainer: {
        paddingHorizontal: 5,
    }
})