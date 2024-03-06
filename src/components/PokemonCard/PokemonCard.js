import React from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export function PokemonCard (props) {
    const { pokemon } = props;

    //Con la función traemos el valor de la función que guarda el objeto y esta función consume la api
    const pokemonColor = getColorByPokemonType(pokemon.type);
    
    const bgStyles = { //Acá traemos los valores de la función para que se lea en los estilos
        backgroundColor: pokemonColor, 
        ...styles.bgStyles, //Acá se trae los estilos, para que no bloquee la funcion
    }

    const goToPokemon = () => {
        console.log(`Vamos al pokemon: ${pokemon.name}`);
    }

    return(
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <Text style={styles.name}>{pokemon.name}</Text>
                        <Image source={{ uri: pokemon.image }} style={styles.image}/>
                        <Text style={styles.number}>#{`${pokemon.order}`.padStart(3,0)}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create ({
    card: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyles:{
        flex: 1,
        borderRadius: 15,
        padding: 10
    },
    name:{
        paddingTop: 10,
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
    },
    image:{
        width: 90,
        height: 90,
        position: "absolute",
        top: 30,
        bottom: 2,
        right: 2,
    },
    number:{
        position: "absolute",
        right: 10,
        top: 10,
        color: "white",
        fontSize: 15
    }
});