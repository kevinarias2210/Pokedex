import React, { useState, useEffect }from "react";
import { ScrollView } from "react-native";
import { getPokemonDetails } from "../api/pokemon";
import PokemonHeader from "../components/Pokemon_Header/PokemonHeader";
import PokemonType from "../components/PokemonType/PokemonType";
import PokemonStats from "../components/PokemonStats/PokemonStats";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Pokemon(props){
    const { navigation, route: {params} } = props

    /* console.log(params) */

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => null,
            headerLeft: () => <Icon name="arrow-left-bold" 
                                color={"#fff"} size={20} 
                                style={{ marginLeft: 20}} 
                                onPress={navigation.goBack}/>
        })
    }, [navigation, params])

    useEffect(() => {
        (async () => {
            try{
                const response = await getPokemonDetails(params.id);
                setPokemon(response)
            }catch(error){
                navigation.goBack();//Si da un error en la navegación se devuelve a la lista anterior
                //La función goBack regresa una screen hacia atrás
            }
        })()
    }, [params])//Se ejecuta el useEffect cada vez que params optiene un id distinto

    if(pokemon === null){
        return null
    }

    /* console.log(params.id) */
    return(
        <ScrollView>
            <PokemonHeader 
            name={pokemon.name} 
            order={pokemon.order} 
            image={pokemon.sprites.other['official-artwork'].front_default}
            type={pokemon.types[0].type.name}/>

            <PokemonType types={pokemon.types}/>
            <PokemonStats stats={pokemon.stats}/>
        </ScrollView>
    )
}
