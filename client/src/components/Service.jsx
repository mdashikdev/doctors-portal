import React from 'react'

function Service({info,handleSelectedService}) {
  return (
    <div onClick={()=> handleSelectedService(`${info.category}`)} className='rounded-xl w-full px-5 py-8 shadow-xl cursor-pointer hover:shadow-sm duration-200'>
        <h3 className='text-xl text-[#19D3AE] font-semibold text-center'>{info?.category}</h3>
    </div>
  )
}

export default Service