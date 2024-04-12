import React, { useState, useEffect } from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { addPokemonFavorite, isPokemonFavorite, removePokemonFavorite } from "../../api/favoriteStorage";

export default function Favorite(props){
    const { id } = props;

    const [isFavorite, setIsFavorite] = useState(undefined);
    const [reloadCheck, setReloadCheck] = useState(false);

    const Icon = isFavorite ? FontAwesome : FontAwesome5;

    useEffect(() => {
        (async () => {
            try{
                const response = await isPokemonFavorite(id);
                setIsFavorite(response);
            }catch(error){
                setIsFavorite(false);
            }
        })();
    }, [id, reloadCheck]);

    const onReloadCheckFavorite = () => {
        setReloadCheck((prev) => !prev);
    };

    const addFavorite = async () => {
        try{
            await addPokemonFavorite(id);
            onReloadCheckFavorite();
        }catch(error){
            console.log(error);
        }
    };

    const removeFavorites = async () => {
        try{
            await removePokemonFavorite(id);
            onReloadCheckFavorite();
        }catch(error){
            console.log(error);
        }
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