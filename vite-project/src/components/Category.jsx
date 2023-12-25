import React, { useState } from 'react'
import usePokemonType from '../hooks/usePokemonType';
import arrow_down from "../assets/arrow_down.svg"
import TypeDropdown from './TypeDropdown';


const Category = () => {
  const [hoverType,setHoverType]=useState(false);

  const setHover=()=>{
    setHoverType(true);
  }

  const resetHover=()=>{
    setHoverType(false);
  }

  return (  
    <>
    <div className='border-2 rounded-md w-2/5 h-10 relative cursor-pointer z-50 right-[120px] xsm:absolute xsm:right-4 xsm:cursor-pointer' onMouseOver={setHover} onMouseLeave={resetHover}>
    <span className=' flex items-center py-2 pl-10 text-[#808080] xsm:text-sm xsm:absolute xsm:right-2 w-40 xsm:text-gray-400'>Select category</span>
      {hoverType && <TypeDropdown/>}
    </div>
    <img src={arrow_down} onMouseOver={setHover} onMouseLeave={resetHover} className={`absolute right-[280px] top-[90px] cursor-pointer xsm:absolute xsm:right-5 ${hoverType ? "duration-500 transition-all transform rotate-180" : "transform rotate-0 transition-all diration-500"}`}/>
    
   </>
  )
}

export default Category

