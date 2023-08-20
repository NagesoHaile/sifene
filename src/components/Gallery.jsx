import React from 'react'
import sifene1 from '../assets/sifene1.jpg';
import sifene2 from '../assets/sifene2.jpg';
import sifenew1 from '../assets/sifenewedding1.jpg';
import sifenew2 from '../assets/sifenewedding2.jpg';
import sifenew3 from '../assets/sifenewedding3.jpg';

const Gallery = () => {
  return (
    <section id='gallery'>
        <div className='w-full py-10 px-10  '>
        <div className='flex space-x-6 justify-center items-center'>
           <div className='w-20 h-1 bg-orange-500'></div>
           <h1 className='font-bold text-orange-500 text-center uppercase' >Our Gallery</h1>
           <div className='w-20 h-1 bg-orange-500'></div>
          </div>
          <div className='text-center'>
             <h1 className='text-2xl  font-bold'>Luxury and well suited hotel at the center of <span className='text-orange-500'>Guji</span>, Ethiopia </h1>
          </div>
          <div className='grid grid-cols-2 items-center justify-center gap-1 md:grid-cols-4 lg:grid-cols-6 py-16 w-full'>
             
                  <img src={sifene1} className='rounded-lg shadwo-md h-52 w-64 cursor-pointer hover:opacity-90'  />
                  <img src={sifene2}  className='rounded-lg shadwo-md h-52 w-64 cursor-pointer hover:opacity-90'/>
                  <img src={sifenew1} className='rounded-lg shadwo-md h-52 w-64  cursor-pointer hover:opacity-90' />
                  <img src={sifenew2}  className='rounded-lg shadwo-md h-52 w-64 cursor-pointer  hover:opacity-90'/>
                  <img src={sifenew3} className='rounded-lg shadwo-md h-52 w-64 cursor-pointer hover:opacity-90' />
                  <img src={sifene1}  className='rounded-lg shadwo-md h-52 w-64 cursor-pointer hover:opacity-90'/>
                  <img src={sifene1}  className='rounded-lg shadwo-md h-52 w-64 cursor-pointer hover:opacity-90'/>
                  <img src={sifene2}  className='rounded-lg shadwo-md h-52 w-64 cursor-pointer hover:opacity-90'/>
                  <img src={sifenew1} className='rounded-lg shadwo-md h-52 w-64 cursor-pointer hover:opacity-90' />
                  <img src={sifenew2} className='rounded-lg shadwo-md h-52 w-64 cursor-pointer hover:opacity-90' />
                  <img src={sifenew3} className='rounded-lg shadwo-md h-52 w-64 cursor-pointer hover:opacity-90' />
                  <img src={sifene1} className='rounded-lg shadwo-md h-52 w-64 cursor-pointer hover:opacity-90' />
              
              
              
              

           
          </div>
        </div>
    </section>
  )
}

export default Gallery