import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';


function Header() {
    const [menu, setmenu] = useState(false);
    const navigate = useNavigate();
  return (
    <div className='w-full lg:max-w-[1240px] md:px-5 m-auto z-30'>
        <div className='flex justify-between py-4'>
            <h3 className='text-2xl font-bold ml-2 cursor-pointer' onClick={() => navigate('../')}>Doctors Portal</h3>
            <AiOutlineMenu onClick={() => setmenu(!menu)} className='md:hidden text-2xl mr-2 text-slate-600 hover:text-slate-900 cursor-pointer'/>
            <div onClick={() => setmenu(!menu)} className={menu ? 'md:hidden block absolute top-0 left-0 w-full h-full bg-black/80 z-10' : 'hidden' }></div>
            <ul className='hidden md:block'>
                <NavLink className='navbtn' to='/home'>Home</NavLink>
                <NavLink className='navbtn' to='/about'>About</NavLink>
                <NavLink className='navbtn' to='/appointment'>Appointment</NavLink>
                <NavLink className='navbtn' to='/reviews'>Reviews</NavLink>
                <NavLink className='navbtn' to='/contact'>Contact Us</NavLink>
                <NavLink className='navbtn' to='/login'>Login</NavLink>
            </ul>
            <ul className={menu ? 'absolute bottom-0 top-0 left-0 z-10 bg-white flex flex-col gap-2 pl-2 pr-8 duration-200 md:hidden' : 'absolute bottom-0 top-0 left-[-500px] duration-200 z-10 bg-white flex flex-col gap-2 pl-2 pr-8'}>
                <FaTimes onClick={() => setmenu(!menu)} className='absolute right-0 top-4 text-2xl p-1 rounded hover:text-red-500 hover:bg-slate-400 m-1 transition-all cursor-pointer'/>
                <NavLink onClick={() => setmenu(!menu)} className='navbtn' to='/home'>Home</NavLink>
                <NavLink onClick={() => setmenu(!menu)} className='navbtn' to='/about'>About</NavLink>
                <NavLink onClick={() => setmenu(!menu)} className='navbtn' to='/appointment'>Appointment</NavLink>
                <NavLink onClick={() => setmenu(!menu)} className='navbtn' to='/reviews'>Reviews</NavLink>
                <NavLink onClick={() => setmenu(!menu)} className='navbtn' to='/contact'>Contact Us</NavLink>
                <NavLink onClick={() => setmenu(!menu)} className='navbtn' to='/login'>Login</NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Header