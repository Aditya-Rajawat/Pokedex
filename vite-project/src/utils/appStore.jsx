import pokemonReducer from "./PokemonSlice";
import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";


const appStore=configureStore({
    reducer:{
        pokemon:pokemonReducer,
        config:configReducer,
    }
});

export default appStore;