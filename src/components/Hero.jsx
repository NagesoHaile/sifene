import React from 'react'

import herohotel from '../assets/herohotel.jpg'
import sifene1 from '../assets/sifene1.jpg'
const Hero = () => {
    
  return (
    <section id='header' >
         <div  style={{backgroundImage:`url(${sifene1})`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}}  className=' flex flex-col h-screen w-full bg-gray-700 mt-16 items-center justify-center ' >
            <div className='flex items-center justify-center space-x-1'>
                 <div className='w-20 h-1 bg-gray-300'></div>
                 <h1 className='text-orange-500 text-2xl font-bold text-center uppercase'>Sifene Hotel</h1>
                 <div className='w-20 h-1 bg-gray-300'></div> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-5xl font-bold text-gray-300'>Discover  A Brand</h1>
                <h1 className='text-5xl font-bold text-gray-300'>Luxurious Hotel</h1>
            </div>
            <div className=' flex space-x-8 p-10'>
               <a className='border-2 rounded py-4 px-6 border-orange-500 uppercase text-xl text-gray-300 hover:bg-orange-500 cursor-pointer'>Our Rooms</a>
               <a className='border-2 rounded py-4 px-6 border-orange-500 uppercase text-xl text-gray-300 hover:bg-orange-500 cursor-pointer'>Book A Room</a>
            </div>
         </div>
    </section>
  )
}

export default Hero