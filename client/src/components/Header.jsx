import React from 'react'
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className='bg-slate-300 rounded-lg'>
      <div className='container mx-auto p-2 flex items-center justify-between'>


        {/* Logo part */}
        <div className='flex gap-3 items-center w-1/3'>
          <Link to={"/"}>
            <div className='size-20 bg-sky-400 rounded-full'>
              {/* Logo  */}
            </div>
          </Link>
          <Link to={"/"}>
            <h1 className='text-2xl font-bold text-slate-800 '>
              Indian Philately
            </h1>
          </Link>
        </div>

        <div className='flex w-2/3 justify-around items-center'>
          <nav>
            <ul className='flex justify-around'>

              <NavLink to={"/"} className={({isActive})=>`${isActive ? "bg-slate-50 rounded-sm text-slate-800 ":"text-slate-500"} px-6 font-medium `}>
              <li className=''>Home</li>
              </NavLink>
              <NavLink to={"/services"} className={({isActive})=>`${isActive ? "bg-slate-50 rounded-sm text-slate-800":"text-slate-500"} px-6 font-medium `}>
              <li className=''>Services</li>
              </NavLink>
              <NavLink to={"/cancellations"} className={({isActive})=>`${isActive ? "bg-slate-50 rounded-sm text-slate-800  ":"text-slate-500"} px-6 font-medium `}>
              <li className=''>Cancellations</li>
              </NavLink>
              <NavLink to={"/about"} className={({isActive})=>`${isActive ? "bg-slate-50 rounded-sm text-slate-800  ":"text-slate-500"} px-6 font-medium `}>
              <li className=''>About</li>
              </NavLink>
              <NavLink to={"/new-events"} className={({isActive})=>`${isActive ? "bg-slate-50 rounded-sm text-slate-800  ":"text-slate-500"} px-6 font-medium `}>
              <li className=''>News & Events</li>
              </NavLink>
            </ul>
          </nav>

          <div className='flex items-center gap-1'>
          <NavLink to={"/log-in"} className={({isActive})=>`${isActive ? "bg-slate-50 rounded-sm text-slate-800  ":"text-slate-500"} px-6 font-medium list-none`}>
              <li className=''>Log-in</li>
              </NavLink>
            <div className='size-9 bg-sky-400 rounded-full'>
              {/* Profile */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
