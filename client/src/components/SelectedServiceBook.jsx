import React, { useContext } from 'react';
import dayjs from 'dayjs';
import { SelectedContext } from './AvailableServices';

function SelectedServiceBook({info}) {
  const [setpopup,setbook] = useContext(SelectedContext);

  const handleBook = (apntId) => {
    setpopup(true);
    setbook(info);
    console.log(apntId)
  }

  return (
    <div className='flex flex-col justify-around rounded-xl w-full mt-5 pb-5 shadow-md cursor-pointer hover:shadow-xl duration-200'>
        <div>
          <img src={info[0]?.avatar} className='w-full h-full max-h-[400px] rounded-t-xl object-cover' alt="" />
        </div>
        <div className='px-5 mt-5'>
          <h2 className='text-xl font-semibold'>Dr. {info[0]?.name}</h2>
          <div className='relative pb-4 text-xl text-[#19D3AE] font-semibold'>{info[0]?.appointment?.Speciality} <h5 className='text-black text-sm font-normal absolute left-0'>Specialist</h5></div>
          <div className='mt-3'>{dayjs(`${info[0]?.appointment?.datefrom}`).format('MMM D, YYYY')}</div>
          <div>{dayjs(`${info[0]?.appointment?.datefrom}`).format('hh:mm A')} - {dayjs(`${info[0]?.appointment?.dateto}`).format('hh:mm A')}</div>
          <button onClick={() => handleBook(`${info[0]?.appointment?._id}`)} className='w-fit px-3 py-2 bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] hover:to-[#0FCFEC] hover:from-[#19D3AE] transition-all rounded-lg text-white mt-5' type="button">Book Appointment</button>
        </div>
    </div>
  )
}

export default SelectedServiceBook