import React from 'react';
import bg from '../images/bg.png';
import chair from '../images/chair.png';
import { AiOutlineClockCircle,AiOutlinePhone } from 'react-icons/ai';
import {BiMap} from 'react-icons/bi';

function Hero() {
  return (
    <div className='relative flex flex-col items-center overflow-hidden'>
      {/* top content */}
      <img className='max-h-[700px] hidden md:block' src={bg} alt=""/>
      <div className='md:absolute lg:max-w-[1240px] w-10/12 h-full top-[-80px] flex flex-col md:flex-row gap-2 justify-between items-center'>
        <div className='flex flex-col gap-3 justify-start order-2 md:order-1'>
          <h2 className='text-5xl font-bold text-gray-700 mr-1'>Your New Smile Starts Here</h2>
          <p className='leading-5 mt-1 text-gray-500 mr-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe blanditiis non neque ipsum illum dolorum quaerat temporibus inventore minima optio!</p>
          <button className='w-fit px-3 py-2 bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] hover:to-[#0FCFEC] hover:from-[#19D3AE] transition-all rounded-lg text-white mt-2 ' type="button">GET STARTED</button>
        </div>
        <div className='order-1 md:order-2'>
          <img src={chair} alt="" />
        </div>
      </div>

      {/* bottom content */}
      <div className='lg:max-w-[1240px] w-10/12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 m-4'>
        <div className='flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r to-[#0FCFEC] from-[#19D3AE]'>
          <AiOutlineClockCircle className='text-7xl text-white'/>
          <div>
            <h4 className='text-white text-xl'>Opening Hours</h4>
            <p className='text-white/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi numquam</p>
          </div>
        </div>

        <div className='flex items-center gap-2 p-3 rounded-lg bg-slate-700'>
          <BiMap className='text-7xl text-white'/>
          <div>
            <h4 className='text-white text-xl'>Visit our location</h4>
            <p className='text-white/80'>Broklyn,NY 10035,United States</p>
          </div>
        </div>

        <div className='flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r to-[#0FCFEC] from-[#19D3AE]'>
          <AiOutlinePhone className='text-7xl text-white'/>
          <div>
            <h4 className='text-white text-xl'>Contact us now</h4>
            <p className='text-white/80'>+000 123 456789</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero