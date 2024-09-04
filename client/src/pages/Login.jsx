import React from 'react'
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <h1 className='text-3xl text-center font-bold mt-7'>Welcome Back</h1>
      <p className='text-xs font-medium text-center'>Enter your credential for login</p>

      <form action="" className='max-w-sm mx-auto mt-4 space-y-4 bg-slate-800 p-4 rounded-lg'>
        <div className='flex bg-red-50 p-2 gap-2 rounded-lg flex-row-reverse'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
            <path d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M10.5 19.5C10.0337 19.4939 9.56682 19.485 9.09883 19.4732C5.95033 19.3941 4.37608 19.3545 3.24496 18.2184C2.11383 17.0823 2.08114 15.5487 2.01577 12.4814C1.99475 11.4951 1.99474 10.5147 2.01576 9.52843C2.08114 6.46113 2.11382 4.92748 3.24495 3.79139C4.37608 2.6553 5.95033 2.61573 9.09882 2.53658C11.0393 2.4878 12.9607 2.48781 14.9012 2.53659C18.0497 2.61574 19.6239 2.65532 20.755 3.79141C21.8862 4.92749 21.9189 6.46114 21.9842 9.52844C21.9939 9.98251 21.9991 10.1965 21.9999 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17ZM19 17V17.5C19 18.3284 19.6716 19 20.5 19C21.3284 19 22 18.3284 22 17.5V17C22 14.5147 19.9853 12.5 17.5 12.5C15.0147 12.5 13 14.5147 13 17C13 19.4853 15.0147 21.5 17.5 21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input type="email" id="email"
            placeholder='E-mail'
            className='bg-transparent outline-none placeholder:text-sm placeholder:text-stone-500 w-full placeholder:font-normal font-medium' />
        </div>
        <div className='flex bg-red-50 p-2 gap-2 rounded-lg flex-row-reverse'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
            <path d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 15.49V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 15.49V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 15.49V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input type="password" id="password"
            placeholder='Password'
            className='bg-transparent outline-none placeholder:text-sm placeholder:text-stone-500 w-full placeholder:font-normal font-medium' />
        </div>
      </form>
      <div className='max-w-sm mx-auto flex justify-center mt-2'>
        <button type='submit' className='bg-[#2A1B12] text-sm font-medium text-white py-3 rounded-lg w-full'>
          Login Now
        </button>
      </div>
      
      {/* Forgout password ? yet to be implemented */}

      <div className='text-sm mt-6 font-medium underline decoration-4 underline-offset-4 decoration-stone-500 flex justify-center'>
        <span className='text-stone-500'>Don't have an account? &nbsp; </span> 
        <Link to={'/sign-up'}>
          <span className=' underline decoration-4 underline-offset-4 decoration-orange-800'>Sign Up</span>
        </Link>
      </div>
    </div>
  )
}

export default Login