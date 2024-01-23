import React from 'react';
import Image from "next/image";
import Hotel_01 from  "../../public/image/hotel/hotel_01.png";
import Hotel_02 from  "../../public/image/hotel/hotel_02.png";
import Hotel_03 from  "../../public/image/hotel/hotel_03.png";
import Hotel_04 from  "../../public/image/hotel/hotel_04.png";
import Hotel_05 from  "../../public/image/hotel/hotel_05.png";
import Hotel_06 from  "../../public/image/hotel/hotel_06.png";
import Star from "../../public/icon/star.svg"



const HotelData = [
    {
        id:"1",
        title:"Grand Maranga Ubud",
        location:"Bali, Indonesia",
        rate:4.8,
        price:240,
        img: Hotel_01
    },
    {
        id:"2",
        title:"Royal Gremasha",
        location:"London, England",
        rate:4.8,
        price:240,
        img: Hotel_02
    },
    {
        id:"3",
        title:"The Maansava",
        location:"Paris, France",
        rate:4.8,
        price:240,
        img: Hotel_03
    },
    {
        id:"4",
        title:"Hurgasi Hotel",
        location:"Rome, Italy",
        rate:4.8,
        price:240,
        img: Hotel_04
    },
    {
        id:"5",
        title:"The Victoria Group",
        location:"Istanbul, Turkey",
        rate:4.8,
        price:240,
        img: Hotel_05
        
    },
    {
        id:"6",
        title:"Ritz Yokama Hotel",
        location:"Tokyo, Japan",
        rate:4.8,
        price:240,
        img: Hotel_06
       
    },
]

export default function HotelCards() {
  return (
    <div className='sm:flex sm:flex-wrap  sm:justify-between'>
    {
        HotelData.map((data)=>(
            <div key={data.id} className='bg-white m-1 rounded-xl p-2  '>
                <div className='w-full p-0.5'><Image src={data.img} alt={data.title} width={450} height={450}/></div>
                <div className='flex flex-col gap-1 p-4'>
                <p className='text-xl font-bold'>{data.title}</p>
                <div className='flex justify-between '>
                    <p className='text-silver'>{data.location}</p>
                    <div className='flex gap-2'>
                        <Image src={Star} alt='star'/>
                        <p>{data.rate}</p>
                    </div>         
                </div>
                <div className='flex align-baseline mt-4'>
                    <p className='text-2xl font-extrabold gap-1'>$ {data.price}</p>
                    <p className='text-silver mt-1'>/night</p>
                </div>
                </div>
            </div>
        ))
    }

</div>
  )
}
