import Image from 'next/image';
import React from 'react';
import Rectangle from '/Project/hotel-landing-page/hotel-landing-page/public/Rectangle.png';
import SearchComponents from '@/components/SearchComponents';
import DatePicker from '@/components/DatePicker';
import Modal from '@/components/Modal';
import Location from '../../public/icon/location.svg';
import CheckIn from '../../public/icon/check-in.svg';
import CheckOut from '../../public/icon/check-out.svg';
import Room from '../../public/icon/rooms.svg';
import Search from '../../public/icon/search.svg'



export default function HeroSection() {
   
  return (
    <>
    <div  className='font-puls-jakarta-sans  '> 
        <div className='sm:flex'>
        <div >
                <Image src={Rectangle} alt='Hero image' width={0} height={0}  priority={true} />          
              </div> 
             <div className='p-5   '>
                <div>
                    <p className='text-3xl  sm:text-6xl '>Experience something new every moment </p>
                </div>
                <div>
                <p className=' text-bubble-gum' style={{}}>Escape to a place where you can relax and unwind, rejuvenate, and reconnect</p>
                </div>                             
             </div>
             
              </div> 

              
            <div className='flex bg-[#F4F9F8]  items-center  justify-center   p-2 rounded-xl'>
            <div className='bg-white sm:flex sm:p-4'>
            <div className=' p-6 '>
              <div className='flex w-64 gap-3 p-3 sm:w-72'>
                <Image src={Location} alt='loc' />
                <p>Location</p>
              </div>
              <div>
              <SearchComponents/>
              </div>
            </div>
            <div className='p-6  '>
              <div className='flex w-64 gap-3 p-3 sm:w-72'>
                <Image src={CheckIn} alt='Checkin' />
                <p>Check In</p>
              </div>
              <div>
              <DatePicker/>
              </div>
            </div>
            <div className=' p-6 '>
              <div className='flex w-64 gap-3 p-3 sm:w-72'>
                <Image src={CheckOut} alt='Check out' />
                <p>Check Out</p>
              </div>
              <div>
              <DatePicker/>
              </div>
            </div>
            <div className=' p-6 '>
              <div className='flex w-64 gap-3 p-3 sm:w-72'>
                <Image src={Room} alt='room' />
                <p>Room</p>
              </div>
              <div>
              <Modal/>
              </div>
            </div>
            <div style={{width:226 ,height:120}} className='bg-midnight m-4 p-3 rounded-full flex items-center justify-center sm:p-1  '>
                <div className='flex p-5  gap-3 sm:p-2'>
                  <Image src={Search} alt='Search'/>
                  <p className='text-white font-extrabold text-lg '>Search</p>
                </div>
              </div>
           
            </div>
            
        </div>  
                
                </div> 

              
             
             
       
       

           
          
          
       
    </>
  )
}
