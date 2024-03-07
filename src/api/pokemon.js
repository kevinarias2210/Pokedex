import { API } from "../utils/constants";

export async function getPokemonApi(endPointUrl){
    console.log(endPointUrl)
    try{
        const url = `${API}/pokemon?limit=20&offset=0`;
        const response = await fetch(endPointUrl || url);//Le decimos que al momento de traerla traiga el endpoint o solo la url
        const res = await response.json();
        return res;
    }catch(error){
        throw error;
    }
}

export async function getPokemonDetailsApi(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error)
    }
}

export async function getPokemonDetails(id){
    try{
        const url = `${API}/pokemon/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}