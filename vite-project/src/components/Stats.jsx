import React from 'react'
import Stat from './Stat'

const Stats = ({stats}) => {
    // console.log(stats)
  return (
    <div className='absolute top-[70px] xsm:w-[270px] xsm:absolute xsm:right-2 xsm:ml-1'>
        {
            stats.map((stat)=>(
                <div className='flex my-4'>
                        <div className='flex w-40 justify-between'>
                            <p className='text-white'>{stat?.stat?.name.charAt(0).toUpperCase()+stat?.stat?.name.slice(1)}</p>
                            <p className='text-white'>{stat?.base_stat}</p>
                        </div>
                        <Stat stat={stat}/>
                </div>

            ))
        }
    </div>
  )
}

export default Stats