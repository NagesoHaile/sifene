import React,{useState} from 'react'
import {CgClose,CgMenu} from 'react-icons/cg'

const Navbar = () => {
    const [mobileMenuOpen,setmobileMenuOpen] = useState(false);
  return (
    <nav className="fixed w-full  bg-gray-900 h-16 py-3 px-6 top-0 z-20 shadow-lg">
         {/* flex container */}
         <div className="flex justify-around items-center ">
            <div className="">
            <h1 className="text-orange-400  font-bold text-2xl">Sifene</h1>
            </div>
            {/* Nav links */}
            <div className="hidden md:flex space-x-6 ">
                <a className="text-green-400 hover:text-green-300 cursor-pointer uppercase">Home</a>
                <a className="text-gray-300 hover:text-green-300 cursor-pointer uppercase">About Us</a>
                <a className="text-gray-300 hover:text-green-300 cursor-pointer uppercase">Services</a>
                <a className="text-gray-300 hover:text-green-300 cursor-pointer uppercase">Rooms</a>
                <a className="text-gray-300 hover:text-green-300 cursor-pointer uppercase">Gallery</a>
                <a className="text-gray-300 hover:text-green-300 cursor-pointer uppercase">Contact</a>
               
            </div>
            <div className="hidden md:block">
              <a className="px-4 py-2 rounded-lg border-2 border-green-300 hover:bg-green-300 text-gray-100 cursor-pointer uppercase">Social Links</a>
            </div>
         </div>
         {/* humburger menu */}
         <div className='absolute md:hidden block top-6 right-3'>
          {mobileMenuOpen? (<></>):(<CgMenu onClick={()=>setmobileMenuOpen(true)} size={30} className='text-gray-300 tw-6 h-6 mr-2'/>)}
         </div>
         {/* mobile menu */}
         <div className={`absolute flex flex-col space-y-4 h-screen bg-gray-900 px-6 pt-20 z-30 w-3/4 md:hidden top-0 smooth-transition duration-500 items-start   ${mobileMenuOpen? 'right-0':'-right-full'}`}>
         <CgClose size={30} onClick={()=>setmobileMenuOpen(false)} className=' absolute top-3 right-4 text-gray-300 w-6 h-6 mr-2' />
         <a className="text-green-400 hover:text-green-300 cursor-pointer uppercase">Home</a>
                <a className="text-gray-300 hover:text-green-300 cursor-pointer uppercase">About Us</a>
                <a className="text-gray-300 hover:text-green-300 cursor-pointer uppercase">Services</a>
                <a className="text-gray-300 hover:text-green-300 cursor-pointer uppercase">Rooms</a>
                <a className="text-gray-300 hover:text-green-300 cursor-pointer uppercase">Gallery</a>
                <a className="text-gray-300 hover:text-green-300 cursor-pointer uppercase">Contact</a>
         </div>
       </nav>
  )
}

export default Navbar