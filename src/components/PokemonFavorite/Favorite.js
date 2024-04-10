import React, { useState, useEffect } from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { addPokemonFavorite, isPokemonFavorite } from "../../api/favoriteStorage";

export default function Favorite(props){
    const [isFavorite, setIsFavorite] = useState(undefined);

    useEffect(() => {
        (async () => {
            try{
                const response = await isPokemonFavorite();
                setIsFavorite(response);
            }catch(error){
                setIsFavorite(false);
            }
        })()
    }, [id]);

    const Icon = isFavorite ? FontAwesome : FontAwesome5;

    const { id } = props;

    const addFavorite = async () => {
        await addPokemonFavorite(id);
    };

    const removeFavorites = () => {
        console.log("eliminar favoritos");
    }

    return(
        <Icon
        name="heart" 
        color="#fff" size={20} 
        onPress={isFavorite ? removeFavorites : addFavorite} 
        style={{ marginRight: 20, marginTop: 150 }}
        />
    );
}