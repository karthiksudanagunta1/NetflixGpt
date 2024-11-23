import React from 'react'

function SearchBar() {
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <form className='absolute h-[10%] w-[50%] top-40 left-[30%] z-30 p-2 rounded-lg bg-black' onSubmit={handleSubmit}>
       <input type="text" placeholder="what is in your mind" className="w-[80%] p-3 m-3  text-white bg-gray-800 border-none rounded-lg" />
       <button className='bg-gray-900 px-3 mx-3 text-white border-1 border-white  rounded-sm' type='Submit'>Search</button>
   </form>

  )
}

export default SearchBar