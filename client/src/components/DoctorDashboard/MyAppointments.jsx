import React, { useContext, useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import axios from 'axios';
import { AllContext, MainApi } from '../../App';
import { ClapSpinner } from "react-spinners-kit";

function MyAppointments() {
    const [togglecalender, settogglecalender] = useState(false);
    const [calender, setCalender] = useState(new Date());
    const [selected, setSelected] = useState();
    const [loading, setloading] = useState(false);
    const [appointments, setappointments] = useState();
    const contexts = useContext(AllContext);
    

    useEffect(() => {
        setloading(true);
      axios.post(`${MainApi}/currenusertAppointments`,{user:contexts.currentUser._id})
      .then(res => {
        setloading(false);
        setappointments(res.data);
      })
      .catch(err => console.log(err))
    }, [])
    
    console.log(appointments)

  return (
    loading ? <ClapSpinner className='mt-10' color='#ea580b' size={35} loading={loading}/> :

    <div className='w-full flex flex-col items-center'>
        <div className='relative w-11/12 md:10/12 flex justify-between mt-10 mb-5'>
            <h3 className='text-2xl font-semibold'>My Appointment</h3>
            <button onClick={() => settogglecalender(!togglecalender)} className='px-4 py-2 rounded-xl bg-slate-500 hover:bg-slate-600 text-white duration-200'>{dayjs(calender).format('MMM DD,YYYY')}</button>
            {
                togglecalender && <DayPicker mode="single" className='absolute right-0 top-10 bg-white rounded-xl p-5 shadow-lg' selected={selected} onSelect={setSelected}
            />
            }
        </div>
        <div className='w-11/12 md:10/12 h-fit bg-white rounded-xl overflow-hidden shadow-sm'>
            <ul className='flex justify-between py-2 text-lg font-bold bg-neutral-200'>
                <li className='text-center w-full'>NAME</li>
                <li className='text-center w-full'>SERVICE</li>
                <li className='text-center w-full'>TIME</li>
            </ul>
            <ul className='flex justify-between py-2 my-3 text-lg font-semibold bg-white'>
                <li className='text-center w-full'>John Doe</li>
                <li className='text-center w-full'>Teeth Orthodontics</li>
                <li className='text-center w-full'>08:00 - 10:00 PM</li>
            </ul>
            <ul className='flex justify-between py-2 my-3 text-lg font-semibold bg-white'>
                <li className='text-center w-full'>John Doe</li>
                <li className='text-center w-full'>Teeth Orthodontics</li>
                <li className='text-center w-full'>08:00 - 10:00 PM</li>
            </ul>
            <ul className='flex justify-between py-2 my-3 text-lg font-semibold bg-white'>
                <li className='text-center w-full'>John Doe</li>
                <li className='text-center w-full'>Teeth Orthodontics</li>
                <li className='text-center w-full'>08:00 - 10:00 PM</li>
            </ul>
        </div>
    </div>
  )
}

export default MyAppointments