import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setExpand } from '../utils/configSlice';
import { IMG_URL } from '../utils/constants';
import usePokemonColor from '../hooks/usePokemonColor';
import Stats from './Stats';


const Modal = () => {

    const dispatch=useDispatch();
    const pokemonData=useSelector((store)=>store.config.pokemonData);
    // console.log(pokemonData)
    const {name,id,stats}=pokemonData;
    const color=usePokemonColor(id);

    const handleClose=()=>{
        dispatch(setExpand(false))
    }


  return (
    <div className="backdrop-blur-sm inset-0 fixed z-50 w-[100000px] h-[100000px]">
    <div className='w-[900px] h-96 bg-orange-600 rounded-lg xsm:h-[490px] relative top-32 left-[300px] xsm:relative xsm:left-10 xsm:w-[300px] transition-all transform duration- overflow-y-scroll no-scrollbar z-50'>
        <div className='cursor-pointer rounded-full w-8 flex items-center justify-center font-semibold h-8 bg-gray-500 absolute right-4 top-4 xsm:absolute xsm:right-4' onClick={handleClose}>X</div>
        <div className='grid grid-cols-2 w-[900px] h-96 xsm:flex xsm:flex-col'>
            <div style={{backgroundColor:color}} className='bg-gradient-to-l xsm:w-1/2 xsm:h-4/5 from-black col-1 flex flex-col items-center justify-center'>
                <p className='text-white font-bold text-3xl absolute top-6 xsm:text-2xl xsm:absolute xsm:right-20 xsm:top-4'>{name.charAt(0).toUpperCase()+name.slice(1).toUpperCase()}</p>
                <img className='w-72 h-72 absolute top-20 xsm:w-32 xsm:h-32 xsm:right-20 xsm:top-16' src={IMG_URL+id+".svg"}/>
            </div>
            <div className='bg-black col-1 xsm:w-[300px] xsm:h-3/5 xsm:text-xs xsm:absolute xsm:top-52'>
                <p className='text-white absolute top-6 text-3xl font-bold xsm:text-base xsm:absolute xsm:left-6'>{'Skills'.toUpperCase()}</p>
                <Stats stats={stats}/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Modal