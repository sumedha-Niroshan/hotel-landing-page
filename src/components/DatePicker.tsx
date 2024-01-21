'use client'
import  {  useState } from 'react';
import Datepicker from 'tailwind-datepicker-react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';




const options = {
  autoHide: true,
  todayBtn: true,
  clearBtn: true,
  clearBtnText: 'Clear',
  maxDate: new Date('2030-01-01'),
  minDate: new Date('1950-01-01'),
  theme: {
    background: "bg-[#6E706E]",
    todayBtn: "bg-[#6E706E]",
    clearBtn: "bg-[#6E706E]",
    icons: "bg-[#6E706E]",
    text: "bg-[#6E706E]",
    disabledText: "bg-red-500",
    input: "bg-[#6E706E]",
    inputIcon: "bg-[#6E706E]",
    selected: "bg-[#34CAC6]",
  },
  icons: {
    prev: () => <span>Previous</span>,
    next: () => <span>Next</span>,
  },
  datepickerClassNames: 'top-18',
  defaultDate: new Date('2022-01-01'),
  language: 'en',
  disabledDates: [],
  weekDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  inputNameProp: 'date',
  inputIdProp: 'date',
  inputPlaceholderProp: 'Select Date',
//   inputDateFormatProp: {
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric',
//   },
};

export default function DatePicker() {
    const [show, setShow] = useState (false) ;
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const handleChange = (selectedDate: Date) => {
        setSelectedDate(selectedDate);
        console.log(selectedDate);
      };
    const handleClose = (state: boolean) => {
        setShow(state)
    }

    return (
        <div>
      <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose}>
        <div className="flex font-puls-jakarta-sans  p-3 ">
          
          <input
            type="text"
            className="text-[#6E706E] "
            placeholder="Select Date"
            value={selectedDate?.toLocaleDateString() || ''}
            onFocus={() => setShow(true)}
            readOnly
            
          />
          <div className="fill-[#6E706E] h-7 w-7">
          <ChevronDownIcon className="h-7 w-7 fill-[#6E706E] text-gray-400" aria-hidden="true" />
           
           </div>
          
        </div>
      </Datepicker>
    </div>
    )
}
