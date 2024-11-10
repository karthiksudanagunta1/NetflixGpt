import React, { useState } from 'react'
import Header from './Header'

function Login() {
   
    const [isSignIn,SetIsSignIn]=useState(false);

    const handleSignIn=()=>{
        SetIsSignIn(!isSignIn);
    }

  return (
    <div className='w-full'>
        <Header/>
        <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg" alt="logo"/>
        <div className='bg-black absolute my-32 mx-[520px]  h-[500px] w-[500px] opacity-90 rounded-lg'>
             <h1 className='text-white mx-5 mt-12 px-5 font-bold text-3xl'>{isSignIn?"Sign Up":"Sign In"}</h1>
            <form className='flex-col flex px-3 mx-2'>
                {
                    isSignIn&&(<input className='p-4 m-4 rounded-lg bg-gray-600 hover:border text-white ' placeholder='Enter Your Name'/>)
                }
              <input type="Email" className='p-4 m-4 rounded-lg bg-gray-600 text-white hover:border' placeholder='Email or mobile number'/>
              <input type="Password" className='p-4 m-4 rounded-lg  bg-gray-600 hover:border  text-white ' placeholder='Enter the password'/>
              <button className='bg-red-700 text-white mx-4  p-4 my-3 rounded-lg'>{isSignIn?"Sign Up":"Sign In"}</button>
            </form>
            {
                !isSignIn?(<p className='text-gray-400 px-8'>New to Netflix? <span className='text-white cursor-pointer' onClick={handleSignIn}>Sign Up Now.</span></p>):(<p className='text-gray-400 px-8'>Already registered? <span className='text-white cursor-pointer' onClick={handleSignIn}>Sign In Now.</span></p>)
            }
            
        </div>
    </div>
  )
}

export default Login