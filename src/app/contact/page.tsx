import React from 'react'
import {Mail,MapPinHouse,Phone , CircleFadingPlus , BookHeadphones,Bird} from 'lucide-react'

const page = () => {
  return (
    <div className='bg-lime-400 w-5/6 my-10 mx-auto  rounded-lg p-10 '>
        <p className='p-4 md:text-2xl text-lg'>Contact us</p>
        <p className='p-4 text-xs md:text-lg'> <Mail className='inline-block w-5 h-5 mr-2' /> contact@zooinxx.com</p>
        <p className='p-4 text-xs md:text-lg'><Phone className='inline-block w-5 h-5 mr-2' /> +1234567890</p>
        <p className='p-4 text-xs md:text-lg'><MapPinHouse className='inline-block w-5 h-5 mr-2' /> 123 Main St, Anytown, USA</p>
        <p className='p-4 text-xs md:text-lg'> <Bird className='inline-block w-5 h-5 mr-2' /> zooinxxfitness</p>
        <p className='p-4 text-xs md:text-lg'><CircleFadingPlus className='inline-block w-5 h-5 mr-2' /> zooinxxfitness</p>
        <p className='p-4 text-xs md:text-lg'> <BookHeadphones className='inline-block w-5 h-5 mr-2' /> zooinxxfitness</p>
    </div>
  )
}

export default page