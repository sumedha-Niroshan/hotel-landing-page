import React from 'react'

export default function BookingSection() {
  return (
    <div>
        <div>
            <h1 className='text-6xl font-bold'>Best offer this month</h1>
        </div>
        <div className='flex justify-between items-center'>
            <p className='text-silver text-xl'>This can be detailed description or just a short text.</p>
            <button className='bg-[#cad7d5] w-24 h-10 text-midnight text-lg rounded-full'>View All</button>     
        </div>
    </div>
  )
}
