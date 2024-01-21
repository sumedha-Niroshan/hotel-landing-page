

export default function Headers() {
  return (
<header className="fixed top-0 w-full bg-white  z-10 sm:overflow-hidden font-puls-jakarta-sans">
  <div className="flex justify-between items-center p-6 xl:mx-16">
            
           
           
                <ul className='flex gap-6   '>
                    <li> <p className='font-black mr-6  md:ml-12 sm:text-lg '>Designspace</p></li>
                    <li className='hidden md:inline text-slate-700 sm:text-lg' >Booking </li>
                    <li className='hidden md:inline text-slate-700  sm:text-lg'> Facilities</li>
                    <li className='hidden md:inline text-slate-700 sm:text-lg'>Room</li>
                    <li className='hidden md:inline text-slate-700 sm:text-lg'> Services</li>
                    <li className='hidden md:inline text-slate-700 sm:text-lg'> Contact</li>
                </ul>
            
            <div className='flex gap-4 mx-0  md:mr-12'>
                <button className="text-lg">Login</button>
                <button className='w-24 h-8 bg-midnight text-white rounded-full  text-lg '>Sign in</button>
            </div>

        </div>

    </header>
    
  )
}
