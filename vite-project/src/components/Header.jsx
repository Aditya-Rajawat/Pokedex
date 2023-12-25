import React from 'react'
import SearchBar from './SearchBar'
import Category from './Category';
import usePokemonType from '../hooks/usePokemonType'

const Header = () => {

  usePokemonType();
  return (
    <>
    <div className='flex items-center xsm:w-[360px]'>
    <SearchBar />
    <Category />
    </div>
    </>
  )
}

export default Header