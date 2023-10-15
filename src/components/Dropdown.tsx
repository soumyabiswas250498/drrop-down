import React, { useState, useRef, useEffect } from 'react';
// import './Dropdown.css';
import { motion } from 'framer-motion';

const options = [
  {
    value: 'dlh',
    label: 'Delhi',
    data: 'IN',
  },
  {
    value: 'tky',
    label: 'Tokoyo',
    data: 'JP',
  },
  {
    value: 'sgh',
    label: 'Sanghai',
    data: 'CH',
  },
  {
    value: 'nyk',
    label: 'NewYork',
    data: 'US',
  },
];

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const [label, setLabel] = useState('');

  // handle click outside

  const refOne = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, []);
  const handleClickOutside = (e: Event) => {
    if (refOne.current && !refOne.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="flex flex-col mx-1 relative select-none">
      <div
        ref={refOne}
        className={
          isOpen
            ? 'bg-blue-400 w-32 p-2 rounded-t-lg relative cursor-pointer'
            : 'bg-blue-400 w-32 p-2 rounded-lg relative cursor-pointer'
        }
        onClick={() => setIsOpen(currentValue => !currentValue)}
      >
        <div className="flex items-center justify-between">
          {label || 'Select'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {isOpen ? (
        <div className="absolute top-10 w-48  px-2 py-2 rounded-b-lg rounded-r-lg menu">
          {options.map((option, index) => (
            <div
              className="flex justify-between py-1 px-2 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors"
              key={index}
              onClick={() => {
                setIsOpen(false);
                setValue(option.value);
                setLabel(option.label);
              }}
            >
              <p>{option.label}</p> <p>{option.data}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
