

export default function Headers() {
  return (
    <header className='sm:overflow-hidden font-puls-jakarta-sans'>
        <div className='flex justify-between items-center p-6 xl:mx-16 '>
            
           
           
                <ul className='flex gap-6   '>
                    <li> <p className='font-black mr-9  md:ml-12 sm:text-lg '>Designspace</p></li>
                    <li className='hidden md:inline text-slate-700 sm:text-lg' >Booking </li>
                    <li className='hidden md:inline text-slate-700  sm:text-lg'> Facilities</li>
                    <li className='hidden md:inline text-slate-700 sm:text-lg'>Room</li>
                    <li className='hidden md:inline text-slate-700 sm:text-lg'> Services</li>
                    <li className='hidden md:inline text-slate-700 sm:text-lg'> Contact</li>
                </ul>
            
            <div className='flex gap-4 mx-0 '>
                <button className="text-lg">Login</button>
                <button className='w-24 h-8 bg-midnight text-white rounded-full   md:mr-16 text-lg'>Sign in</button>
            </div>

        </div>

    </header>
    
  )
}
