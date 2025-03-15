import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()
  return (
    <div className='flex flex-col md:flex-row items-center bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
      
      { /* --- left side ---  */}
      <div className='flex-1 py-8 sm:py-16 lg:24 lg:pl-5'>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
          <p >Book Appointment</p>
          <p className='mt-4'>With 100+ Trusted Doctors</p>
        </div>
        <button onClick={() =>{navigate('/login'); scrollTo(0,0)}} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>
          Create Account
        </button>
      </div>

      { /* --- right side --- */ }
      <div className='w-full md:w-1/2 lg:w-[370px] relative'>
    <img className='w-full h-auto rounded-lg' src={assets.appointment_img} alt="Appointment" />
</div>

    </div>
  )
}

export default Banner
