import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../screens/Favorites";
import Pokemon from '../screens/Pokemon';

const Stack = createNativeStackNavigator()

export default function FavoriteNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Favorite" component={Favorites} options={{
                title: "",
                headerTransparent: true
            }}/>

            <Stack.Screen name="Pokemon" component={Pokemon} options={{
                title: "",
                headerTransparent: true
            }}>
            
            </Stack.Screen>
        </Stack.Navigator>
    )
}
