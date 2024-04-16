import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonFavorite } from "../api/favoriteStorage";
import { getPokemonDetails } from "../api/pokemon";
import useAuth from '../hooks/useAuth';
import PokemonList from '../components/PokemonList/PokemonList';
import NoLogged from "../components/NoLogged/NoLogged";

export default function Favorites(){
    const [pokemons, setPokemons] = useState([]);
    const { auth } = useAuth();

    useFocusEffect(
        useCallback(() => {
            if(auth){
                (async () => {
                    const response = await getPokemonFavorite();
    
                    const pokeArray = [];
    
                    for await (const id of response){
                    const pokemonDetail = await getPokemonDetails(id);
                    
                    pokeArray.push({
                        id: pokemonDetail.id,
                        name: pokemonDetail.name,
                        type: pokemonDetail.types[0].type.name,
                        order: pokemonDetail.order,
                        image: pokemonDetail.sprites.other['official-artwork'].front_default
                    })
                }
    
                setPokemons(pokeArray);
    
                })();
            }
        }, [auth])
    );

    return !auth ? (
        <NoLogged />
    ) : ( 
    <PokemonList pokemon={pokemons} /> 
    );
}