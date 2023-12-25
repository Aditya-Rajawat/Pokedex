import React, { useEffect } from 'react'
import Card from './Card';
import Modal from './Modal';
import { useSelector } from 'react-redux';


const Body = () => {

  const expand=useSelector((store)=>store.config.expand);
  
  return (
    <div>
    {expand && <Modal/>}
    <Card />
    </div>
  )
}

export default Body