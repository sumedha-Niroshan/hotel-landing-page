'use client'
import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import Img_1 from '../../public/image/Avatar1.png';
import Img_2 from '../../public/image/Avatar2.png'
import StarRating from "./StarRating";

const BookingData = [
    {
        id:"1",
        customer_name:"Angela Karamoy",
        customer_title: "Happy Customer",
        customer_photo:Img_1,
        Review:"Designspace is a really great site with really great people and the quality of content is excellent. Some of the best designers in the world use this, and it is inspirational.",
        rate:1

    },
    {
        id:"2",
        customer_name:"Angela Karamoy",
        customer_title: "Happy Customer",
        customer_photo:Img_2,
        Review:"Designspace is a really great site with really great people and the quality of content is excellent. Some of the best designers in the world use this, and it is inspirational.",
        rate:5

    },
    {
        id:"3",
        customer_name:"Jessica Zhui",
        customer_title: "Happy Customer",
        customer_photo:Img_1,
        Review:"Designspace has consistently delivered above and beyond my expectations! Brilliant design work, incredible response time and a really friendly team I strongly recommend them",
        rate:2

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

export default function ReviewSection() {
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
            <div key={data.id} className="m-7">
            <div className="bg-white m-2 p-12 flex flex-col gap-8">
                <div>
                <StarRating  rating={data.rate}/>   
                </div>
                <div className="pr-16 text-base sm:text-xl">
                    <p>{data.Review}</p>
                </div>
                <div className="flex gap-4">
                    <div><Image src={data.customer_photo} alt="Profile"/></div>
                    <div>
                        <p className="text-lg font-bold">{data.customer_name}</p>
                        <p className="text-silver">{data.customer_title}</p>
                    </div>
                </div>
            </div>
            </div>
          )
            
    
    
          )}
    
          
        </Slider>
    
      )
}
