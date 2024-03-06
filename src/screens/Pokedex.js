import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { getPokemonApi, getPokemonDetailsApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList/PokemonList";

//Se utiliza el useEffect para que ejecute el API una sola vez
//Como el consumo de la API es una promes, también hay que resolverlo así
/*Como no se puede colocar el async directamente en la funcion del useEffect
hacemos una función autoejecutable eso es: () ()
Y ahí si esperamos la respuesta de la API
*/

export default function Pokedex(){
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        (async () => {
            await loadPokemon();
        })()
    }, []);

    const loadPokemon = async () => {
        try{
            const response = await getPokemonApi();
            
            const pokeArray = [];

            for await (const pokemons of response.results){
                const pokemonDetail = await getPokemonDetailsApi(pokemons.url);
                
                pokeArray.push({
                    id: pokemonDetail.id,
                    name: pokemonDetail.name,
                    type: pokemonDetail.types[0].type.name,
                    order: pokemonDetail.order,
                    image: pokemonDetail.sprites.other['official-artwork'].front_default
                })
            }

            setPokemon([...pokemon, ...pokeArray]);
        }catch(error){
            console.log(error)
        }
    }

    return (
        <SafeAreaView>
            <PokemonList pokemon={pokemon} />
        </SafeAreaView>
    )
}