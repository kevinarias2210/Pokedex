import React from "react";
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Favorite(props){
    const addFavorite = () => {
        const { id } = props;

        console.log('añadir a favoritos', id);
    }

    return(
        <Icon
        name="heart" 
        color="#fff" size={20} 
        onPress={addFavorite} 
        style={{ marginRight: 20, marginTop: 150 }}/>
    );
}