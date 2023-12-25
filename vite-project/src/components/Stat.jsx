import React, { useState } from 'react'

const Stat = ({stat}) => {
    const [color,setColor]=useState("");
    const {base_stat}=stat;
  return (
    <div style={{width:base_stat<100 ? (base_stat%100)+100 : base_stat+100}} className={`ml-10 rounded-md ${base_stat<50 ? "bg-red-700": base_stat>=100 ? "bg-green-900": base_stat>=50 && base_stat<100 ? "bg-yellow-500" :""}`}></div>
  )
}

export default Stat