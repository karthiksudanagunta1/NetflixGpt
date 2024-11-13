import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const user=useSelector((store)=>store.user)
  return (
    <div className='absolute   w-full px-10 py-3 bg-gradient-to-b from-black z-10' >
        <img className='w-2/12 mx-25' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
        {
          user && <div>
            <img src={user.photoURL} alt="url" className='w-5'/>
          </div>

        }
    </div>
  )
}

export default Header