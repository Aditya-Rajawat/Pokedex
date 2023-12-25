import { useEffect, useState } from "react";
import { POKEMON_TYPE_API } from "../utils/constants"
import { useDispatch } from "react-redux";
import { setPokemonTypes } from "../utils/PokemonSlice";

const usePokemonType=()=>{

    const dispatch=useDispatch();

    const getPokemonTypes=async()=>{
        const data=await fetch(POKEMON_TYPE_API);
        const json=await data.json();
        dispatch(setPokemonTypes(json?.results))
    }

    useEffect(()=>{
        getPokemonTypes();
    },[])
};

export default usePokemonType;
