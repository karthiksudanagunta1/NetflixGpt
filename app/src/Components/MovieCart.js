import React from 'react'

function MovieCart({movieCarts,title}) {
  return (movieCarts&&
    <div className='mb-3'>
      <h1 className="text-xl font-semibold text-white pl-6 pb-2">{title}</h1>
      <div className="flex w-full h-auto  scrollbar-none hover:scrollbar-thin  scrollbar-track-slate-50 overflow-x-auto utility   gap-5 pl-6 ">
        {movieCarts.map((movie, index) => (
          <div
            key={index}
            className="group relative cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out "
            style={{ flex: "0 0 auto", width: "125px" }} 
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-[185px] rounded-md shadow-lg object-cover transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>

    </div>
  )
}

export default MovieCart