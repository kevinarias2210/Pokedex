import React from "react";
import { FlatList, StyleSheet, ActivityIndicator, View } from "react-native";
import { PokemonCard } from "../PokemonCard/PokemonCard";


export default function PokemonList (props){
    const { pokemon, loadPokemon, isNext } = props;

    const loadMore = () => {
        loadPokemon();
    };

    return(//Este componente se está renderizando dentro de un SafeAreaView como padre, por eso no necesita un vio
        <View style={styles.container}>
            <FlatList 
            data={pokemon}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({item}) => <PokemonCard pokemon={item}/>}
            contentContainerStyle={styles.flastListContentContainer}
            onEndReached={isNext && loadMore}//Cuando se llega al final de la lista ejecuta la funcion de cargar más o cuando llegue al limite llegará a null
            onEndReachedThreshold={0.1}//Cuando esté a punto de llegar se detiene para que cargue más la lista
            ListFooterComponent={//Renderiza lo que va a estar en el footer
                /* isNext && (//Si el estado es null entonces dejará el loader
                ) */
                isNext && (<ActivityIndicator //Componente de react native para hacer un loader
                    size="large"
                    style={styles.spinner}
                    color="#F50101"
                />)
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flastListContentContainer: {
        /* height: "100%", */
        paddingHorizontal: 5,
    },
    spinner:{
        marginTop: 20,
        marginBottom: 60
    }
})