import React, { useState } from 'react';
import Footer from './Footer';
import Service from './Service';
import fakedata from '../fakedata.json';
import SelectedServiceBook from './SelectedServiceBook';

function AvailableServices() {
    const [services, setservices] = useState(fakedata);
    const [selectedService, setselectedService] = useState();
    const [book, setbook] = useState();
    const [popup, setpopup] = useState(false);

    const handleSelectedService = (name) => {
        setselectedService(services.find(service => service.category.toLowerCase() === name.toLowerCase()))
    }
    const handleBook = (name) => {
        setpopup(true);
        setbook(name);
    }

  return (
        <div className='w-full md:w-8/12'>
            <div className='mt-16 w-full'>
                <h4 className='text-[#19D3AE] text-lg font-semibold text-center'>Available Services on April 30,2022</h4>
                <p className='text-gray-500 text-md text-center'>Please select a service</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 w-full'>
                {
                    services.map((service,idx) => <Service info={service} handleSelectedService={handleSelectedService} key={idx} /> )
                }
            </div>
                {
                    selectedService && 
                    <>{
                        selectedService.services ? (
                            <>
                                <h4 className='text-[#19D3AE] text-lg font-semibold text-center my-20'>Available slots for {selectedService.category}</h4>
                                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 w-full'>
                                    {
                                        selectedService?.services.map((ser,idx) => <SelectedServiceBook key={idx} info={ser} handleBook={handleBook} />)
                                    }
                                </div>
                            </>
                        )
                        : <h1 className='text-xl text-center mt-5'>No Service Found</h1>
                    }
                    </>
 
                }
                {
                    popup &&
                    <div onClick={() => setpopup(false)} className='absolute w-full h-screen left-0 bg-slate-900/50'></div>
                }
        </div>
  )
}

export default AvailableServices