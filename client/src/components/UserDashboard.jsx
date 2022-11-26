import React, { useState } from 'react'
import { GiTireIronCross } from 'react-icons/gi';

function UserDashboard() {
    const [liToggle, setliToggle] = useState('My Appointments');
    const [popup, setpopup] = useState(false);

    const lis = 'text-sm md:text-md font-semibold cursor-pointer px-2 md:px-3 py-3 hover:bg-slate-200/50 duration-200';
    const liActive = 'text-sm md:text-md font-semibold bg-slate-200/50 cursor-pointer px-2 md:px-3 py-3 duration-200';

    const handlePay = () => {
        setpopup(!popup);
    }

  return (
        <div className='w-full relative min-h-screen bg-slate-200/50 flex justify-between'>
        <div className='w-full md:w-[280px] absolute md:relative top-0  md:block bg-white '>
            <ul className='w-full flex justify-center md:flex-col gap-2 md:gap-5 mt-5'>
                <li onClick={() => setliToggle('My Appointments')} className={liToggle === 'My Appointments' ? liActive : lis}>My Appointments</li>
                <li onClick={() => setliToggle('My Reviews')} className={liToggle === 'My Reviews' ? liActive : lis}>My Reviews</li>
                <li onClick={() => setliToggle('My History')} className={liToggle === 'My History' ? liActive : lis}>My History</li>
                <li onClick={() => setliToggle('Home')} className={liToggle === 'Home' ? liActive : lis}>Home</li>
            </ul>
            {/* <h3 className='text-md font-semibold bg-slate-200/50 cursor-pointer px-3 py-3'>My Appointment</h3> */}
        </div>
        <div className='w-full flex flex-col items-center'>
                {
                    popup &&
                    <div onClick={() => setpopup(!popup)} className='fixed w-full h-full top-0 left-0 backdrop-blur-md z-10'></div>
                }
                {
                    popup &&
                    <div className='fixed top-0 left-0 w-full h-full z-20 flex justify-center md:items-center items-end'>
                        <div className='lg:w-1/3 md:w-1/2 w-full h-fit p-4 rounded-t-2xl md:rounded-2xl border border-neutral-500 bg-white shadow-lg'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-between'>
                                    <h4 className='text-md text-[#19D3AE] font-semibold'>Hello, Name</h4>
                                    <GiTireIronCross onClick={() => setpopup(false)} className='p-2 bg-neutral-700 hover:bg-neutral-800 duration-200 rounded-full text-3xl text-white cursor-pointer'/>
                                </div>
                                <h3 className='text-2xl font-semibold'>Please Pay for Tech Cleaning</h3>
                                <p className='text-black/70 '>Your Appointment : <span className='text-yellow-500 font-semibold'>Nov 09, 2022</span> at 08:00 AM - 08:30 AM</p>
                                <h3 className='text-2xl font-semibold'>Please Pay: $200</h3>
                                <hr />
                            </div>
                            <form action="#" className='flex flex-col gap-3 mt-5' onSubmit={(e)=> e.preventDefault()}>
                                <input type="number" placeholder='Card Number' className='w-full p-3 rounded-md bg-transparent border border-neutral-500 text-md font-semibold focus:outline-none' />
                                <input type="email" placeholder='MM/YY/CVC' className='w-full p-3 rounded-md bg-transparent border border-neutral-500 text-md font-semibold focus:outline-none' />
                                <input type="submit" value='Pay' className='w-full px-4 py-3 rounded-md text-white bg-neutral-800 hover:bg-neutral-900 duration-200 cursor-pointer' />
                            </form>
                        </div>
                    </div>
                }
            <div className='relative w-11/12 md:10/12 flex justify-between mt-24 md:mt-10 mb-5'>
                <h3 className='text-2xl font-bold'>My Appointment : 06</h3>
            </div>
            <div className='w-11/12 md:10/12 h-fit bg-white rounded-xl overflow-auto md:overflow-hidden shadow-sm'>
                <ul className='min-w-[550px] grid grid-cols-5 justify-between items-center py-2 text-lg font-bold bg-neutral-200'>
                    <li className='text-center w-full'>NAME</li>
                    <li className='text-center w-full'>DATE</li>
                    <li className='text-center w-full'>TIME</li>
                    <li className='text-center w-full'>TREATMENT</li>
                    <li className='text-center w-full'>PAYMENT</li>
                </ul>
                <ul className='min-w-[550px] grid grid-cols-5 justify-between items-center py-4 mb-1 text-md font-semibold text-black/80 bg-white border border-t-0 border-l-0 border-r-0 border-b-neutral-200/50'>
                    <li className='text-center w-full'>John Doe</li>
                    <li className='text-center w-full'>1/31/14</li>
                    <li className='text-center w-full'>08:00 - 10:00 PM</li>
                    <li className='text-center w-full'>Teeth Orthodontics</li>
                    <li onClick={handlePay} className='text-center mx-auto cursor-pointer px-4 py-2 bg-green-500 rounded-lg text-white w-fit'>Pay</li>
                </ul>

                <ul className='min-w-[550px] grid grid-cols-5 justify-between items-center py-4 mb-1 text-md font-semibold text-black/80 bg-white border border-t-0 border-l-0 border-r-0 border-b-neutral-200/50'>
                    <li className='text-center w-full'>John Doe</li>
                    <li className='text-center w-full'>1/31/14</li>
                    <li className='text-center w-full'>08:00 - 10:00 PM</li>
                    <li className='text-center w-full'>Teeth Orthodontics</li>
                    <li onClick={handlePay} className='text-center mx-auto cursor-pointer px-4 py-2 bg-green-500 rounded-lg text-white w-fit'>Pay</li>
                </ul>                <ul className='min-w-[550px] grid grid-cols-5 justify-between items-center py-4 mb-1 text-md font-semibold text-black/80 bg-white border border-t-0 border-l-0 border-r-0 border-b-neutral-200/50'>
                    <li className='text-center w-full'>John Doe</li>
                    <li className='text-center w-full'>1/31/14</li>
                    <li className='text-center w-full'>08:00 - 10:00 PM</li>
                    <li className='text-center w-full'>Teeth Orthodontics</li>
                    <li onClick={handlePay} className='text-center mx-auto cursor-pointer px-4 py-2 bg-green-500 rounded-lg text-white w-fit'>Pay</li>
                </ul>                <ul className='min-w-[550px] grid grid-cols-5 justify-between items-center py-4 mb-1 text-md font-semibold text-black/80 bg-white border border-t-0 border-l-0 border-r-0 border-b-neutral-200/50'>
                    <li className='text-center w-full'>John Doe</li>
                    <li className='text-center w-full'>1/31/14</li>
                    <li className='text-center w-full'>08:00 - 10:00 PM</li>
                    <li className='text-center w-full'>Teeth Orthodontics</li>
                    <li onClick={handlePay} className='text-center mx-auto cursor-pointer px-4 py-2 bg-green-500 rounded-lg text-white w-fit'>Pay</li>
                </ul>                <ul className='min-w-[550px] grid grid-cols-5 justify-between items-center py-4 mb-1 text-md font-semibold text-black/80 bg-white border border-t-0 border-l-0 border-r-0 border-b-neutral-200/50'>
                    <li className='text-center w-full'>John Doe</li>
                    <li className='text-center w-full'>1/31/14</li>
                    <li className='text-center w-full'>08:00 - 10:00 PM</li>
                    <li className='text-center w-full'>Teeth Orthodontics</li>
                    <li onClick={handlePay} className='text-center mx-auto cursor-pointer px-4 py-2 bg-green-500 rounded-lg text-white w-fit'>Pay</li>
                </ul>                <ul className='min-w-[550px] grid grid-cols-5 justify-between items-center py-4 mb-1 text-md font-semibold text-black/80 bg-white border border-t-0 border-l-0 border-r-0 border-b-neutral-200/50'>
                    <li className='text-center w-full'>John Doe</li>
                    <li className='text-center w-full'>1/31/14</li>
                    <li className='text-center w-full'>08:00 - 10:00 PM</li>
                    <li className='text-center w-full'>Teeth Orthodontics</li>
                    <li onClick={handlePay} className='text-center mx-auto cursor-pointer px-4 py-2 bg-green-500 rounded-lg text-white w-fit'>Pay</li>
                </ul>

            </div>
        </div>
        </div>
  )
}

export default UserDashboard