import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard';
import { useDispatch, useSelector } from 'react-redux';
import { setOriginalList, setPokemonList } from '../utils/PokemonSlice';
import { GET_POKEMON_API } from '../utils/constants';

const Card = () => {

  const [page,setPage]=useState(1);
  const [loading,setLoading]=useState(true);
  const pokemonList=useSelector((store)=>store.pokemon.pokemonList);
  const dispatch=useDispatch();


    const getPokemonList=async()=>{
        try{
            const data=await fetch(GET_POKEMON_API);
            const json=await data.json();
            dispatch(setPokemonList(json?.results));
            dispatch(setOriginalList(json?.results));
            setLoading(false);
        }
        catch(error){
            console.log('Error fetching data:',error)
        }
    };

    useEffect(()=>{
        getPokemonList();
    },[page])

    const handleScroll=async()=>{
      try{
        if(
          window.innerHeight + document.documentElement.scrollTop+1>=document.documentElement.scrollHeight 
        ){
          setLoading(true);
          setPage((prev)=>prev+1);
        }
      }catch(error){
        console.log(error)
      }
    }

    useEffect(()=>{
      window.addEventListener("scroll",handleScroll);
      return ()=>window.removeEventListener("scroll",handleScroll);
    },[])


  if(!pokemonList) return;


  return (
    <div className='flex flex-wrap py-10 pl-10 relative xsm:absolute xsm:right-2 xsm:w-[360px]'>
      {
        pokemonList.map((pokemon,idx)=>(
          <PokemonCard key={idx} data={pokemon}/>
        ))
      }
      {loading && <p className='left-[45%] bottom-0 absolute z-50 text-3xl'>Loading...</p>}
    </div>
  )
}

export default Card