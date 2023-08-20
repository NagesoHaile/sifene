import React from 'react'

const About = () => {
  return (
   <section id='about-us' className='overflow-x-hidden'>
       <div className='w-full h-screen px-10' >
           <div className='flex space-x-4 items-center pt-20'>
             <h1 className='uppercase text-3xl font-bold text-center'>About Us</h1>
             <div className='w-20 h-1 bg-orange-500'></div>
           </div>
           <div className='flex flex-col space-y-10'>
              <h1 className='text-3xl font-bold '>Welcome to <span className='text-orange-500 uppercase'>Sifene</span> Hotel</h1>
              <p className='w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt inventore non illo eum esse soluta possimus tempore eos accusamus labore aspernatur mollitia, pariatur totam beatae porro eius facilis necessitatibus eaque! Quo excepturi error sunt aperiam quisquam officia ullam delectus obcaecati.</p>
           </div>
           <div className='flex w-96 py-10 space-x-8'>
               <div className='w-1/3 h-36 border-2 border-orange-400'>

               </div>
               <div className='w-1/3 h-36 border-2 border-orange-400'>

              </div>
              <div className='w-1/3 h-36 border-2 border-orange-400'>

              </div>
           </div>
           <div>
              <a className='uppercase bg-orange-500 rounded-lg py-4 px-8 text-gray-100 cursor-pointer' href="">Explore more</a>
           </div>
       </div>
   </section>
  )
}

export default About