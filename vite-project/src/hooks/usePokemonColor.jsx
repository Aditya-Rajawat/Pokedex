import { useEffect, useState } from "react";
import { POKEMON_COLOR_API } from "../utils/constants"

const usePokemonColor=(id)=>{

    const [color,setColor]=useState("");

    const getPokemonColor=async()=>{
        const data=await fetch(POKEMON_COLOR_API+id);
        const json=await data.json();
        setColor(json?.color?.name)
    }

    useEffect(()=>{
        getPokemonColor();
    },[id])

    return color;
};

export default usePokemonColor;