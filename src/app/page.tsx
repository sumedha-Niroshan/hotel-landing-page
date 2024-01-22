import HeroSection from "@/containers/HeroSection";
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


export default function Home() {
  return (
    <main className='font-puls-jakarta-sans  mt-14 relative' >
      <div  className='font-puls-jakarta-sans  '> 
        <div className='sm:flex'>
        <div  className="">
                <Image src={Rectangle} alt='Hero image' width={0} height={0}  priority={true} />          
              </div> 
             <div className='p-5 sm:p-20 dm:p-24 text-[#F4F9F8] md:ml-15'>
                <div className='text-2xl sm:gap-4 text-[#000000] sm:text-6xl sm:font-extrabold'>
                    <p className="sm:m-5" >Experience  </p>
                    <p className="sm:m-5"> something  </p>
                    <p className="sm:m-5">new every  </p>
                    <p className="sm:m-5"> moment </p>
                </div>
                <div>
                <p className=' text-silver font-base sm:m-5 sm:text-xl '>Escape to a place where you can relax and unwind, </p>
                <p className=' text-silver font-base sm:m-5 sm:text-xl '> rejuvenate, and reconnect</p>
                </div>                             
             </div>
             
              </div> 

              
            <div className='flex sm:absolute sm:bottom-28 sm:left-24 sm:items-center  justify-center  p-10 sm:p-5'>
            <div className='bg-white items-center justify-center sm:flex p-0 sm:rounded-full sm:p-0'>
            <div className=' p-10 sm:p-1 sm:ml-12'>
              <div className='flex w-64 gap-3  sm:p-1 '>
                <Image src={Location} width={0} height={0} alt='loc' />
                <p className="text-xl font-bold ">Location</p>
              </div>
              <div>
              <SearchComponents/>
              </div>
            </div>
            <div className='p-10 sm:p-1 '>
              <div className='flex w-64 gap-3 p-3 sm:p-1 '>
                <Image src={CheckIn} height={0} width={0} alt='Checkin' />
                <p className="text-xl font-bold">Check In</p>
              </div>
              <div>
              <DatePicker/>
              </div>
            </div>
            <div className=' p-10 sm:p-1'>
              <div className='flex w-64 gap-3 p-3 sm:p-1'>
                <Image src={CheckOut} height={0} width={0} alt='Check out' />
                <p className="text-xl font-bold">Check Out</p>
              </div>
              <div>
              <DatePicker/>
              </div>
            </div>
            <div className=' p-10 sm:p-1'>
              <div className='flex w-60 gap-3 p-3 sm:p-1 '>
                <Image src={Room} height={0} width={0} alt='room' />
                <p className="text-xl font-bold">Room</p>
              </div>
              <div>
              <Modal/>
              </div>
            </div>
            <div  className='bg-midnight p-6 m-8 sm:m-1 w-60 sm:w-50 sm:p-10 rounded-full flex items-center justify-center   '>
                <div className='flex p-3 gap-3 '>
                  <Image src={Search} alt='Search'/>
                  <p className='text-white font-extrabold text-lg '>Search</p>
                </div>
              </div>
           
            </div>
            
        </div>  
                
                </div> 

              
             
    
      
      

      
      
    </main>
  );
}
