

export default function Footer() {
  return (
    <div className="font-puls-jakarta-sans xl:m-16 z-8 ">
        <div className=" gap-5  p-5  md:flex md:items-center md:justify-between sm:p-14 md:h-[228px]">
            <div className="p-2">
             <p className="text-3xl  md:text-5xl  ">Subscribe us for more   </p> 
             <p className="text-3xl  md:text-5xl  "> info & discount </p>               
            </div>
            <div>
              <form >
                <p  className="w-[280px] h-[50px] bg-siwhite rounded-full flex justify-between items-center text-[12px] text-metal p-2 md:w-[510px] md:h-[72px] md:text-base">Enter your email address
                <button  className="w-[120px] h-[40px] bg-midnight rounded-full flex justify-center items-center text-sm text-white md:w-[181px] md:h-[56px] md:text-base ">Get Started</button>   
                </p>        
              </form>
            </div>
        </div>
        <div className="mx-5 sm:mx-12  xl:mx-16">
        <hr className="h-px my-8 pr-14 pl-14 bg-metal border-0 dark:bg-siwhite"></hr>

        </div>
        
        <div className="sm:flex sm:justify-between items-baseline sm:p-14 ">
            <div className=" p-5">
            <p className='font-black   sm:text-base xl:text-lg '>Designspace</p>
            <p className="xl:text-lg mt-3">Sometimes features require a short description. This </p>
            <p className="xl:text-lg">can be detailed description or just a short text.</p>
            </div>
            <div className="sm:flex">
            <div className="p-5">
                <p className="text-base font-black xl:text-lg">Company</p>
                <ul className="text-metal text-sm xl:text-lg">
                    <li className="mt-3">About Us</li>
                    <li  className="mt-3">Testimonial</li>
                    <li  className="mt-3">Terms of services</li>
                    <li  className="mt-3">Privacy Policy</li>
                    <li  className="mt-3">Investor</li>
                </ul>
            </div>
            
            <div className="p-5">
                <p className="text-base font-black xl:text-lg">Services</p>
                <ul className="text-metal text-sm xl:text-lg">
                    <li  className="mt-3">Booking</li>
                    <li  className="mt-3">Support Center</li>
                    <li  className="mt-3">Blog</li>
                    <li  className="mt-3">Review</li>
                    <li  className="mt-3">Room</li>
                </ul>
            </div>
            <div className="p-5">
                <p className="text-base font-black xl:text-lg">Recourses</p>
                <ul className="text-metal  text-sm xl:text-lg">
                    <li  className="mt-3">Help Center</li>
                    <li  className="mt-3">Guide</li>
                    <li  className="mt-3">Partner Network</li>
                    <li  className="mt-3">FAQ's</li>
                    <li  className="mt-3">Documentation</li>
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}
