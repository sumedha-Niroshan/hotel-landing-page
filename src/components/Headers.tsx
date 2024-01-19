import React from 'react'

export default function Headers() {
  return (
    <header className='font-puls-jakarta-sans'>
        <div className='flex justify-between items-center h-20'>
            
            <div>
                <ul className='flex gap-10 ml-40 text-base justify-center  '>
                    <li><p className='font-black mr-9 '>Designspace</p></li>
                    <li  >Booking </li>
                    <li> Facilities</li>
                    <li>Room</li>
                    <li> Services</li>
                    <li > Contact</li>
                </ul>
            </div>
            <div className='mr-60 flex gap-4'>
                <button>Login</button>
                <button className='w-24 h-10 bg-midnight text-white rounded-full'>Sign in</button>
            </div>

        </div>

    </header>
    
  )
}
