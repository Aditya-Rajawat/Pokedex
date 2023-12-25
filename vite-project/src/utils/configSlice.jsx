import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        expand:false,
        pokemonData:null
    },
    reducers:{
        setExpand:(state,action)=>{
            state.expand=action.payload;
        },
        setPokemonData:(state,action)=>{
            state.pokemonData=action.payload;
        }
    }
});

export const {setExpand,setPokemonData}=configSlice.actions;

export default configSlice.reducer;