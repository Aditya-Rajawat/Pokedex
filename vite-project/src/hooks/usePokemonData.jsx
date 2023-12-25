import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addValuesToMap } from "../utils/PokemonSlice";

const usePokemonData=(api_url)=>{

    const [dataPokemon,setDataPokemon]=useState();
    const dispatch=useDispatch();

    const getPokemonData=async()=>{
        const data=await fetch(api_url)
        const json=await data.json()
        setDataPokemon(json);
    }

    dataPokemon?.types.map((type)=>(
        dispatch(addValuesToMap([type?.type?.name,dataPokemon?.name]))
    ))

    useEffect(()=>{
        getPokemonData();
    },[api_url])

    return dataPokemon;
};

export default usePokemonData;