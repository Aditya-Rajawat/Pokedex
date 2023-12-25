import {createSlice, current} from "@reduxjs/toolkit";

const PokemonSlice=createSlice({
    name:"pokemon",
    initialState:{
        pokemonTypes:null,
        pokemonList:null,
        originalPokemonList:null,
        typeToNameMap:{}
    },
    reducers:{
        setPokemonTypes:(state,action)=>{
            state.pokemonTypes=action.payload;
        },
        setPokemonList:(state,action)=>{
            state.pokemonList=action.payload;
        },
        setOriginalList:(state,action)=>{
            state.originalPokemonList=action.payload;
        },
        addValuesToMap:(state,action)=>{
            const [type,name]=action.payload;
            state.typeToNameMap[[name,type]]=1;
        }

    }
});


export const {setPokemonTypes,setPokemonList,setOriginalList,addValuesToMap}=PokemonSlice.actions;

export default PokemonSlice.reducer;