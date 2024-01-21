import Image from 'next/image'
import React from 'react'
import Rectangle from '/Project/hotel-landing-page/hotel-landing-page/public/Rectangle.png'

export default function HeroSection() {
  return (
    <div style={{marginTop:'53px'}} className=' '> 
        <div className=''>
             <div className='p-5'>
                <div>
                    <p className='text-3xl '>Experience something new every moment </p>
                </div>
                <div>
                <p className='' style={{color:"#6E706E"}}>Escape to a place where you can relax and unwind, rejuvenate, and reconnect</p>
                </div>                             
             </div>
        <div>
            <Image src={Rectangle} />

        

       
       
        </div>
       
       
        
        </div>
    </div>
  )
}
