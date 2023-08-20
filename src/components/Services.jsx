import React from 'react'
import {GiStorkDelivery} from 'react-icons/gi';
import {MdAirlineSeatReclineExtra} from 'react-icons/md';
import {BsFillBookmarkCheckFill} from 'react-icons/bs'
import {RiTakeawayFill,RiReservedLine} from 'react-icons/ri';

const Services = () => {
  return (
     <section id='services' className='overflow-x-hidden'>
       <div className='w-full py-10 px-10 bg-gray-800'>
            <div className='flex space-x-6 justify-center items-center'>
           <div className='w-20 h-1 bg-orange-500'></div>
           <h1 className='font-bold text-orange-500 text-center uppercase' >Our Services</h1>
           <div className='w-20 h-1 bg-orange-500'></div>
          </div>
          <div className='text-center'>
             <h1 className='text-4xl text-gray-200 font-bold'>Explore Our <span className='text-orange-500'>Services</span></h1>
          </div>
          <div className='grid grid-cols-1 gap-1  md:grid-cols-2 lg:grid-cols-3 py-16 w-full'>
              <div className='md:w-96 py-8 h-80  bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center px-10 hover:bg-orange-400 cursor-pointer '>
                  <GiStorkDelivery  size={100}/>
                  <h1 className='text-gray-300 text-xl font-bold '>Delivery</h1>
                  <p className='text-gray-400 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Perspiciatis fugiat expedita cumque deserunt nihil sequi.</p>
              </div>
              <div className='md:w-96 py-8 h-80  bg-gray-800 rounded-lg shadow-lg flex flex-col items-center px-10 hover:bg-orange-400 cursor-pointer '>
                  <MdAirlineSeatReclineExtra  size={100}/>
                  <h1 className='text-gray-300 text-xl font-bold '>Outdoor Seat</h1>
                  <p className='text-gray-400 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Perspiciatis fugiat expedita cumque deserunt nihil sequi.</p>
              </div>
              <div className='md:w-96 py-8 h-80  bg-gray-800 rounded-lg shadow-lg flex flex-col items-center  px-10 hover:bg-orange-400 cursor-pointer'>
                  <RiTakeawayFill  size={100}/>
                  <h1 className='text-gray-300 text-xl font-bold '>Takeout</h1>
                  <p className='text-gray-400 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Perspiciatis fugiat expedita cumque deserunt nihil sequi.</p>
              </div>
              <div className='md:w-96 py-8 h-80  bg-gray-800 rounded-lg shadow-lg flex flex-col items-center  px-10 hover:bg-orange-400 cursor-pointer'>
                  <BsFillBookmarkCheckFill  size={100}/>
                  <h1 className='text-gray-300 text-xl font-bold '>Takeout</h1>
                  <p className='text-gray-400 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Perspiciatis fugiat expedita cumque deserunt nihil sequi.</p>
              </div>
              <div className='md:w-96 py-8 h-80  bg-gray-800 rounded-lg shadow-lg flex flex-col items-center px-10 hover:bg-orange-400 cursor-pointer'>
                  <GiStorkDelivery  size={100}/>
                  <h1 className='text-gray-300 text-xl font-bold '>Dine-In</h1>
                  <p className='text-gray-400 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Perspiciatis fugiat expedita cumque deserunt nihil sequi.</p>
              </div>
              <div className='md:w-96 py-8 h-80  bg-gray-800 rounded-lg shadow-lg flex flex-col items-center px-10 hover:bg-orange-400 cursor-pointer '>
                  <RiReservedLine  size={100}/>
                  <h1 className='text-gray-300 text-xl font-bold '>Reservation</h1>
                  <p className='text-gray-400 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Perspiciatis fugiat expedita cumque deserunt nihil sequi.</p>
              </div>
          </div>
            </div>
     </section>
  )
}

export default Services