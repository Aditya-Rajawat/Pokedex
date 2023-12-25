import React from "react";
import SearchIcon from "../assets/search.svg"
import { useDispatch, useSelector } from "react-redux";
import { setPokemonList } from "../utils/PokemonSlice";

const SearchBar = () => {

  const originalPokemonList=useSelector((store)=>store.pokemon.originalPokemonList);
  const dispatch=useDispatch();


  const handleSearch=(e)=>{
      const val=e.target.value;
      const newList=originalPokemonList.filter((pokemon)=>pokemon?.name.includes(val));
      console.log(newList)
      dispatch(setPokemonList(newList));
  }

  return (
    <div className="flex items-center w-full ml-16 xsm:relative xsm:right-[180px] xsm:text-sm ">
        <img src={SearchIcon} className="absolute mx-2 w-8 h-8 cursor-pointer" alt="" />
    <input type="search" className="border-2 rounded-md focus:outline-none w-2/4 h-10 pl-12 py-2 p-3 xsm:w-44" onChange={(e)=>handleSearch(e)} placeholder="Search your favourite pokemons..."/>
    </div>
  );
};

export default SearchBar;
