import React, { useContext } from 'react';
import dayjs from 'dayjs';
import { SelectedContext } from './AvailableServices';

function SelectedServiceBook({info}) {
  const [setpopup,setbook] = useContext(SelectedContext);

  const handleBook = () => {
    setpopup(true);
    setbook(info);
  }
  return (
    <div className='flex flex-col justify-center items-center rounded-xl w-full px-5 py-8 shadow-md cursor-pointer hover:shadow-xl duration-200'>
        <h3 className='text-xl text-[#19D3AE] font-semibold text-center'>{info?.services}</h3>
        <div className='mt-3'>{dayjs(`${info.from}`).format('hh:mm A')} - {dayjs(`${info.to}`).format('hh:mm A')}</div>
        <button onClick={handleBook} className='w-fit px-3 py-2 bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] hover:to-[#0FCFEC] hover:from-[#19D3AE] transition-all rounded-lg text-white mt-5' type="button">Book Appointment</button>
    </div>
  )
}

export default SelectedServiceBook