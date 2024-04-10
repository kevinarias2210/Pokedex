import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { addPokemonFavorite } from "../../api/favoriteStorage";

export default function Favorite(props){
    const { id } = props;

    const addFavorite = async () => {
        await addPokemonFavorite(id);
    };

    return(
        <Icon
        name="heart" 
        color="#fff" size={20} 
        onPress={addFavorite} 
        style={{ marginRight: 20, marginTop: 150 }}
        />
    );
}