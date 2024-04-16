import React, { useState, useCallback } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import useAuth from '../../hooks/useAuth';
import { getPokemonFavorite } from "../../api/favoriteStorage";

export default function UserData(){
    const { auth, logOut } = useAuth();
    const [ total, setTotal ] = useState(0);

    useFocusEffect(
        useCallback(() => {
            (async () => {
                try{
                    const response = await getPokemonFavorite();
                    setTotal(size(response));
                }catch(error){
                    setTotal(0);
                }
            })()
        },[])
    )
    
    return(
        <View style={styles.user}>
            <View style={styles.content}>

                <View style={styles.titleBlock}>
                    <Text style={styles.title}>Bienvenido</Text>
                    <Text style={styles.titleName}>
                        {`${auth.firtsname} ${auth.lastName}`}
                    </Text>
                </View>

                <View style={styles.DataContent}>
                    <Text style= {styles.info}>
                        <ItemMenu title="Nombre" text={`${auth.firtsname} ${auth.lastName}`} />
                        <ItemMenu title="UserName" text={`${auth.userName}`} />
                        <ItemMenu title="Email" text={`${auth.email}`} />
                        <ItemMenu title="Total Favoritos" text={`${total} Pokemons`} />
                    </Text>
                </View>

                <Button title="Desconectarse" onPress={logOut} style={styles.btnLogOut} color={"black"}/>
            </View>
        </View>
    )
};

function ItemMenu (props) {
    const {title, text} = props;

    return(
        <View style={styles.itemMenu}>
            <Text style={styles.itemMenuTitle}>{title}</Text>
            <Text style={styles.info}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    user: {
        height: "100vh",
        backgroundColor: "#FF4034"
    },

    content: {
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 90,
        marginHorizontal: 20,
    },

    titleBlock:{
        marginBottom: 30
    },

    title: {
        fontWeight: "bold",
        fontSize: 30,
        color: "white"
    },

    titleName:{
        fontWeight: "300",
        fontSize: 25,
        color: "black"
    },  

    DataContent: {
        marginBottom: 20,
    },

    itemMenu: {
        flexDirection: "row",
        paddingVertical: 20,
        borderColor: "#CFCFCF"
    },

    itemMenuTitle: {
        width: 120,
        paddingRight: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    },

    info:{
        fontSize: 18,
        fontWeight: "300"
    },

    btnLogOut: {
        paddingTop: 20
    }
})