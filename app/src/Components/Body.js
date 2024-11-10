import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'

function Body() {
    const appRoute=createBrowserRouter([
        {
            element:<Login/>,
            path:"/"
        },{
            element:<Browse/>,
            path:"/browse"
        }
    ])

  return (
    <div><RouterProvider router={appRoute}/></div>
  )
}

export default Body