'use client'
import  { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { PlusCircleIcon ,  MinusCircleIcon } from "@heroicons/react/24/outline";









export default function Modal() {
    const [rooms, setRooms] = useState(1);
    const [guest, setGuest] = useState(1);

    return (
      <div className=" top-16 w-72 font-puls-jakarta-sans">
        <Listbox >
          <div className=" mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-1 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm font-puls-jakarta-sans">
              <span className="block truncate font-puls-jakarta-sans text-silver text-[16px]">{rooms} Room   {guest} Guest</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[72px]">
                <ChevronDownIcon className="h-7 w-7 fill-[#6E706E] text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                <div className='gap-3 text-lg'>
               <div className='flex gap-4 '>
                <div>Rooms</div>
                <div className='flex gap-5'>
                <PlusCircleIcon  onClick={()=>{setRooms(rooms+1)}} className="h-6 w-6 text-gray-500" />
                <span >{rooms}</span>
                <MinusCircleIcon onClick={() => setRooms(Math.max(1, 1, rooms -1))} className="h-6 w-6 text-gray-500" />
               </div>

                </div>
                
               <div className='flex gap-4 text-lg'>
                <div className=''>Guest</div>
                <div className='flex gap-5'>
                <PlusCircleIcon  onClick={()=>{setGuest(guest+1)}} className="h-6 w-6 text-gray-500" />
                <span >{guest}</span>
                <MinusCircleIcon onClick={() => setGuest(Math.max(1, 1, guest -1))} className="h-6 w-6 text-gray-500" />
               </div>

                </div>
               
               </div>
                
                  
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    );
}
