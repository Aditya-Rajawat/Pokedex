import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemonList } from '../utils/PokemonSlice';


const TypeDropdown = () => {

    const pokemonTypes=useSelector((store)=>store.pokemon.pokemonTypes);
    const originalPokemonList=useSelector((store)=>store.pokemon.originalPokemonList);
    console.log(originalPokemonList)
    const mapp=useSelector((store)=>store.pokemon.typeToNameMap);
    const dispatch=useDispatch();

    if(pokemonTypes==null) return 

    const handleCategoryFilter=(e)=>{
      const type=e.target.innerText;
      const type1=type.charAt(0).toLowerCase() + type.slice(1);
      const newList=originalPokemonList.filter((pokemon)=>mapp[[pokemon?.name,type1]]===1);
      dispatch(setPokemonList(newList))

    }

  return (
    <div className='overflow-y-scroll h-60 no-scrollbar border-b-[1.5px] shadow-2xl bg-white text-black bg-opacity-90 xsm:absolute top-9 xsm:w-[142px] xsm:shadow-2xl'>
        {
            pokemonTypes.map((type,idx)=>(
                <p key={idx} className=' p-3 border-[1.5px] hover:bg-gray-100 xsm:hover:bg-gray-100' onClick={(e)=>handleCategoryFilter(e)}>{type?.name.charAt(0).toUpperCase()+type?.name.slice(1)}</p>
            ))
        }
    </div>
  )
}

export default TypeDropdown