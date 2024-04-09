import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import useAuth from '../../hooks/useAuth';

export default function UserData(){
    const { auth, logOut } = useAuth();
    
    return(
        <View>
            <View style= {styles.content}>

                <View style= {styles.titleBlock}>
                    <Text style= {styles.title}>Bienvenido</Text>
                    <Text tyle= {styles.title}>
                        {`${auth.firtsname} ${auth.lastName}`}
                    </Text>
                </View>

                <View style= {styles.DataContent}>
                    <Text>
                        <ItemMenu title="Nombre" text={`${auth.firtsname} ${auth.lastName}`} />
                        <ItemMenu title="UserName" text={`${auth.userName}`} />
                        <ItemMenu title="Email" text={`${auth.email}`} />
                        <ItemMenu title="Total Favoritos" text={`0 Pokemons`} />
                    </Text>
                </View>

                <Button title="Desconectarse" onPress={logOut} style={styles.btnLogOut}/>
            </View>
        </View>
    )
};

function ItemMenu (props) {
    const {title, text} = props;

    return(
        <View style={styles.itemMenu}>
            <Text style={styles.itemMenuTitle}>{title}</Text>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 20,
        marginHorizontal: 20,
    },

    titleBlock:{
        marginBottom: 30
    },

    title: {
        fontWeight: "bold",
        fontSize: 22
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
        fontWeight: "bold",
    },

    btnLogOut: {
        paddingTop: 20
    }
})