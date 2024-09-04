import React, { useState } from 'react'
import { Link } from "react-router-dom";
import NavBar from './NavBar';
export default function Header() {



  return (
    <div className='container mx-auto outline flex items-center p-3 bg-[#FEF7F2]'>
      {/* Logo */}

      <div className='flex gap-1 items-center w-1/3'>
        <Link to={'/'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#1C1917" fill="none">
            <path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 22V16.2727C15 14.4653 13.6569 13 12 13C10.3431 13 9 14.4653 9 16.2727V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 10L20 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 10L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.5 10L12.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 22L4 6H20L20 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 6V5C5 3.58579 5 2.87868 5.43934 2.43934C5.87868 2 6.58579 2 8 2H16C17.4142 2 18.1213 2 18.5607 2.43934C19 2.87868 19 3.58579 19 5L19 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <Link to={'/'}>
          <h1 className='text-2xl text-stone-900 font-semibold'>Indian Philately</h1>
        </Link>
      </div>

      <div className='flex w-2/3 items-center justify-between'>
        <NavBar />

        {/* Log-in/Sign-up */}
        <div className='flex gap-2'>
          {/* Profile Logo */}
          <button className='bg-stone-300 rounded-full p-2'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M11.8315 13.8502C7.92501 14.2033 4.94884 17.5042 5.0007 21.4262V21.6251C5.0007 22.3844 5.61629 23 6.37565 23C7.13502 23 7.75061 22.3844 7.75061 21.6251V21.3712C7.70928 18.9631 9.48641 16.9095 11.8755 16.6047C14.3974 16.3546 16.6445 18.1963 16.8946 20.7182C16.9094 20.8673 16.9168 21.017 16.917 21.1668V21.6251C16.917 22.3844 17.5326 23 18.2919 23C19.0513 23 19.6669 22.3844 19.6669 21.6251V21.1667C19.6624 17.1122 16.3719 13.829 12.3174 13.8335C12.1553 13.8337 11.9933 13.8392 11.8315 13.8502Z" fill="#2B1B12" />
                <path d="M12.3339 11.9996C15.3713 11.9996 17.8337 9.53727 17.8337 6.49982C17.8337 3.46237 15.3713 1 12.3339 1C9.29641 1 6.83403 3.46237 6.83403 6.49982C6.83704 9.53603 9.29765 11.9966 12.3339 11.9996ZM12.3339 3.74991C13.8526 3.74991 15.0838 4.9811 15.0838 6.49982C15.0838 8.01855 13.8526 9.24973 12.3339 9.24973C10.8151 9.24973 9.58394 8.01855 9.58394 6.49982C9.58394 4.9811 10.8151 3.74991 12.3339 3.74991Z" fill="#2B1B12" />
              </g>
            </svg>
          </button>

          {/* Button */}
          <button className='bg-[#2A1B12] font-medium text-lg text-white py-1 px-4 rounded-lg'>
            sign up
          </button>


        </div>
      </div>
    </div>
  )
}