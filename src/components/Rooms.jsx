import React from 'react'
import room1 from '../assets/room1.jpg';
import room2 from '../assets/room2.jpg';
import room3 from '../assets/room3.jpg';
const Rooms = () => {
  return (
    <section id='rooms' className='overflow-x-hidden'>
        <div className='w-full  py-10 px-10'>
          <div className='flex space-x-6 justify-center items-center'>
           <div className='w-20 h-1 bg-orange-500'></div>
           <h1 className='font-bold text-orange-500 text-center uppercase' >Our Rooms</h1>
           <div className='w-20 h-1 bg-orange-500'></div>
          </div>
          <div className='text-center'>
             <h1 className='text-4xl font-bold'>Explore Our <span className='text-orange-500'>Rooms</span></h1>
          </div>
          <div className='grid grid-cols-1 gap-1 md:grid-cols-3 py-16 w-full'>
              <div className='md:w-96 bg-gray-300 shadow-lg rounded-lg flex flex-col'>
                    <div className=''>
                        <img src={room1} alt='room1' className='cover' />
                    </div>
                    <div className=' flex flex-col space-x-4 items-start py-8 px-4'>
                    <div className='px-4'>
                         <h1 className='text-xl font-bold text-orange-500'>Deluxe Bedroom</h1>
                          <h1 className='text-gray-800 font-bold'>1000 ETB</h1>
                         </div>
                          <a className='px-4 py-2 rounded-lg text-gray-300 font-bold bg-orange-500 uppercase cursor-pointer'>View Detail</a>
                    </div>
              </div>
              <div className='md:w-96 bg-gray-300 shadow-lg rounded-lg flex flex-col'>
                    <div className=''>
                        <img src={room2} alt='room1' className='cover' />
                    </div>
                    <div className=' flex flex-col space-x-4 items-start py-8 px-4'>
                         <div className='px-4'>
                         <h1 className='text-xl font-bold text-orange-500'>Execute Suite</h1>
                          <h1 className='text-gray-800 font-bold'>2000 ETB</h1>
                         </div>
                          <a className='px-4 py-2 rounded-lg text-gray-300 font-bold bg-orange-500 uppercase cursor-pointer'>View Detail</a>
                    </div>
              </div>
              <div className='md:w-96 bg-gray-300 shadow-lg rounded-lg flex flex-col'>
                    <div className=''>
                        <img src={room3} alt='room1' className='cover' />
                    </div>
                    <div className=' flex flex-col space-x-4 items-start py-8 px-4'>
                    <div className='px-4'>
                         <h1 className='text-xl font-bold text-orange-500'>Standard Bedroom</h1>
                          <h1 className='text-gray-800 font-bold'>800 ETB</h1>
                         </div>
                          <a className='px-4 py-2 rounded-lg text-gray-300 font-bold bg-orange-500 uppercase cursor-pointer'>View Detail</a>
                    </div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Rooms