import Image from 'next/image';
import React from 'react';
import Rectangle from '../../public/Rectangle.png';
import SearchComponents from '@/components/SearchComponents';
import DatePicker from '@/components/DatePicker';
import Modal from '@/components/Modal';
import Location from '../../public/icon/location.svg';
import CheckIn from '../../public/icon/check-in.svg';
import CheckOut from '../../public/icon/check-out.svg';
import Room from '../../public/icon/rooms.svg';
import Search from '../../public/icon/search.svg'
import BookingCarousel from "@/components/BookingCarousel";
import HotelCards from "@/components/HotelCards";
import Icon_1 from "../../public/icon/icon-1.svg";
import Icon_2 from "../../public/icon/icon-2.svg";
import Icon_3 from "../../public/icon/icon-3.svg";
import Base from "../../public/image/Base.png"
import ReviewSection from '@/components/ReviewSection';


export default function Home() {
  return (
    <main className='font-puls-jakarta-sans  mt-14 relative' > 
    {/*Hero section start*/}
      <div  className='font-puls-jakarta-sans  '> 
        <div className='sm:flex'>
        <div  className="">
                <Image src={Rectangle} alt='Hero image' width={0} height={0}  priority={true} />          
              </div> 
             <div className='p-5 sm:p-20 dm:p-24 bg-bg-3 md:ml-15'>
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
              <div className='px-10'>        
            <div className='flex sm:absolute sm:top-[400px] sm:right-5 xl:top-[520px] sm:left-12 xl:left-28 sm:items-center justify-center md:mx-6 p-10 sm:p-5 '>
            <div className='bg-white items-center justify-between sm:flex p-0 sm:rounded-full sm:p-0'>
            <div className=' p-10 sm:p-1 sm:ml-12'>
              <div className='flex gap-3 sm:w-56  sm:p-1 '>
                <Image src={Location} width={0} height={0} alt='loc' />
                <p className="text-xl font-bold ">Location</p>
              </div>
              <div>
              <SearchComponents/>
              </div>
            </div>
            <div className='p-10  sm:p-1 '>
              <div className='flex   gap-3 p-3 sm:p-1 '>
                <Image src={CheckIn} height={0} width={0} alt='Checkin' />
                <p className="text-xl font-bold">Check In</p>
              </div>
              <div>
              <DatePicker/>
              </div>
            </div>
            <div className=' p-10 sm:p-1'>
              <div className='flex gap-3 p-3 sm:p-1'>
                <Image src={CheckOut} height={0} width={0} alt='Check out' />
                <p className="text-xl font-bold">Check Out</p>
              </div>
              <div>
              <DatePicker/>
              </div>
            </div>
            <div className=' p-10 sm:p-1'>
              <div className='flex gap-3 p-3 sm:p-1 '>
                <Image src={Room} height={0} width={0} alt='room' />
                <p className="text-xl font-bold">Room</p>
              </div>
              <div>
              <Modal/>
              </div>
            </div>
            <div  className='bg-midnight p-6 m-8 sm:-m-1 sm:p-7 xl:p-10 sm:w-44 xl:w-56 rounded-full flex items-center justify-center   '>
                <div className='flex p-3 gap-3 md:p-2'>
                  <Image src={Search} alt='Search'/>
                  <p className='text-white font-extrabold text-lg '>Search</p>
                </div>
              </div>
            </div> 
        </div>  
        </div>             
      </div>
       {/*Hero section End*/}  


       {/*Booking section Start*/}  

       <div className="p-3 sm:p-16 xl:p-[128px]">
        
        <div>
            <h1 className='text-3xl sm:text-6xl font-bold'>Best offer this month</h1>
        </div>
        <div className='sm:flex justify-between items-center'>
            <p className='text-silver text-base sm:text-xl'>This can be detailed description or just a short text.</p>
            <button className='bg-bg-3 font-bold w-24 h-10 text-midnight text-base sm:text-lg   rounded-full'>View All</button>     
        </div>
        <div className="mt-6">
        <BookingCarousel/>

        </div>
        </div>
        {/*Booking section Start*/}  


        {/*Expore populer holel Start*/} 
        <div className="bg-bg-3  p-5 sm:p-28">
            <div className="flex flex-col gap-4">
              <p className="text-3xl font-bold sm:text-6xl">Explore popular hotel</p>
              <div className="sm:flex justify-between">
                <p className="text-silver sm:text-xl">This can be detailed description or just a short text</p>
                <button className='bg-midnight font-semibold w-24 h-10 text-white text-base sm:text-lg rounded-full'>View All</button>  
              </div>
            </div>
            <div>
              <HotelCards/>
            </div>
          </div>
        {/*Expore populer holel end*/} 



        {/*We care for .... start*/} 

          <div className="p-6 sm:p-28 sm:flex sm:flex-wrap sm:justify-between">
            <div className="sm:w-1/3 xl:w-1/2">
              <p className="text-3xl font-bold sm:text-4xl xl:text-6xl m-3">We care for each guest like a family</p>
              <p className="text-base text-silver  xl:text-xl">Create useful prototype with our universal wireframes and blocks without any difficulties, just copy and paste wherever you want. </p>

              <div className="flex flex-col gap-3 pl-3 mt-6 sm:gap-6">
                <div className="flex gap-6">
                  <div className="w-40 xl:w-auto">
                    <Image src={Icon_1} alt="icon-1" width={0} height={0}/>
                  </div>
                  <div className="">
                    <p className="text-lg font-bold sm:text-xl">Best quality Hotel</p>
                    <p className="text-silver ">Sometimes features require a short description. This can be detailed description or just a short text.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-40 xl:w-auto">
                    <Image src={Icon_2} alt="icon-1" width={0} height={0}/>
                  </div>
                  <div>
                    <p className="text-lg font-bold sm:text-xl">Low price & many promo</p>
                    <p className="text-silver ">Sometimes features require a short description. This can be detailed description or just a short text.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-40 xl:w-auto">
                    <Image src={Icon_3} alt="icon-1" width={0} height={0}/>
                  </div>
                  <div>
                    <p className="text-lg font-bold sm:text-xl">Money back guarantee</p>
                    <p className="text-silver">Sometimes features require a short description. This can be detailed description or just a short text.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="bg-bg-3 p-6 rounded-xl">
                <Image src={Base} width={0} height={0} alt="img "/>
              </div>
            </div>
          </div>

         {/*We care for .... end*/}


         {/* Review section  start*/}  
         <div className="bg-bg-3  p-5 sm:p-28">
          <div>
            <p className='text-3xl font-bold my-3 sm:text-6xl'>What people say..</p>
          </div>
          <div className='sm:flex justify-between'>
            <p className='text-base text-silver sm:text-xl'>This can be detailed description or just a short text.</p>
            <button className='bg-midnight font-semibold w-24 h-10 text-white text-base sm:text-lg rounded-full'>View All</button>  
          </div>
          <div>
            <ReviewSection/>
          </div>
         </div>
         {/* Review section  start*/}     
    </main>
  );
}
