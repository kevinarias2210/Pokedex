import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Favorites" component={FavoriteNavigation} options={{
                tabBarLabel: "Favoritos",
                tabBarIcon: ({size, color}) => (
                    <Icon name="heart" size={size} color={color}/>
                )
            }}/>
            <Tab.Screen name="Pokedex" component={PokedexNavigation} options={{
                tabBarLabel: "",
                tabBarIcon: () => renderPokeball(),
            }}/>
            <Tab.Screen name="Account" component={AccountNavigation} options={{
                tabBarLabel: "Usuario",
                tabBarIcon: ({size, color}) => (
                    <Icon name="account" size={size} color={color}/>
                )
            }}/>
        </Tab.Navigator>
    )
}


function renderPokeball () {
    return(
        <Image 
        source={require('../assets/pokeball.png')}
        style={{ width: 75, height: 75, top: -17}}/>
    )
}