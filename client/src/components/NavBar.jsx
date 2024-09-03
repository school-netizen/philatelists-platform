import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
    const [drop, setDrop] = useState(false);
    const dropdown = () => setDrop(!drop)
    return (
        <div className='w-2/3 '>
            {/* Navigation Menu */}
            <nav>
                <ul className='flex font-bold justify-around'>
                    <li><NavLink to={'/'} className={({ isActive }) => `${isActive ? 'text-[#2A1B12] underline underline-offset-1 decoration-stone-950' : 'text-stone-600'}`}>
                        Home
                    </NavLink></li>

                    {/* Dropdown for services */}
                    <li>
                        <button onClick={dropdown} className="text-stone-600 font-bold rounded-lg text-center inline-flex items-center relative" type="button">
                            Services
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        {
                            drop && (
                                <div className='absolute z-10 bg-white shadow-lg mt-2 rounded-lg'>
                                    <ul className="py-2 text-sm text-stone-600">

                                        <li className="block px-4 py-2 hover:bg-stone-200">
                                            Order
                                        </li>

                                        <li className="block px-4 py-2 hover:bg-stone-200">
                                            Postal Services
                                        </li>

                                        <li className="block px-4 py-2 hover:bg-stone-200">
                                            Sell
                                        </li>
                                        
                                    </ul>
                                </div>
                            )
                        }

                    </li>

                    <li><NavLink to={'/cancellations'} className={({ isActive }) => `${isActive ? 'text-[#2A1B12] underline underline-offset-1 decoration-stone-950' : 'text-stone-600'}`}>
                        Cancellations
                    </NavLink></li>
                    <li><NavLink to={'/conatact'} className={({ isActive }) => `${isActive ? 'text-[#2A1B12] underline underline-offset-1 decoration-stone-950' : 'text-stone-600'}`}>
                        Contact
                    </NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
