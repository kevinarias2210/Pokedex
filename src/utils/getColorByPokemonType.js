import { Pokemon_Type_Colors } from "./constants";

//El type sale del objeto de pokemonTypeColors que trae las claves del objeto, que en este caso son los tipos de pokemon
const getColorByPokemonType = (type) => Pokemon_Type_Colors[type.toLowerCase()];

export default getColorByPokemonType;