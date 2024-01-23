'use client'
import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import Img_1 from '../../public/image/booking_1.png';
import Img_2 from '../../public/image/booking_2.png'

const BookingData = [
    {
        id:"1",
        title:"50% Off",
        img: Img_1,
        discription:"This can be detailed description or just a short text."
    },
    {
        id:"2",
        title:"30% Off",
        img: Img_2,
        discription:"This can be detailed description or just a short text."
    },
    {
        id:"3",
        title:"25% Off",
        img: Img_2,
        discription:"This can be detailed description or just a short text."
    }

]





interface SliderSettings {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToScroll: number;
    slidesToShow: number,
    appendDots:any;
    customPaging:any;
    responsive:any;
  }

export default function BookingCarousel() {
    const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    appendDots: (dots: any) => (
        <div className="flex items-center justify-center mt-6 ">{dots}</div>
      ), 
    customPaging: (i: number) => (
        <div className="w-4 h-4 bg-bermuda rounded-full hover:bg-midnight" />
      ), 
    responsive:  [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    
    };
  

  return (
    <Slider {...settings}>
      {BookingData.map((data ,index)=>(
        <div className="sm:justify-center sm:flex sm:items-center">
            <div className="flex  p-3 bg-bg-3 m-1 rounded-xl">
            <div className="">
                <Image src={data.img}  alt={data.title} width={0} height={0} />
            </div>
            <div className="p-1  flex flex-col justify-between items-center sm:p-0 " >
                <div className="text-center  ">
                <h1 className="font-extrabold text-xl sm:text-3xl sm:m-2">{data.title}</h1>
               <div className="flex justify-center items-center align-middle sm:text-xl sm:m-2 ">
                <p className="text-silver sm:text-base sm:m-2">{data.discription}</p>
               </div>
               <button className=" bg-midnight rounded-full p-2 text-white text-xs sm:px-6 sm:py-2 sm:text-base sm:m-6">BOOK NOW</button>

                </div>
              
            </div>

            </div>
          

        </div>
      )
        


      )}

      
    </Slider>

  )
}
