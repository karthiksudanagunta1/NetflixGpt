import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import {onAuthStateChanged} from "firebase/auth";
import { auth } from '../utils/Firebaseconfig';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userCart';
import Error from './Error';

function Body() {
    const dispatch=useDispatch();


    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayname,photoURL} = user;
              dispatch(addUser({uid,email,displayname,photoURL}))
            } else {
               dispatch(removeUser());
            }
          });
    },[dispatch]);



    const appRoute=createBrowserRouter([
        {
            element:<Login/>,
            path:"/"
        },{
            element:<Browse/>,
            path:"/browse"
        },{
          element:<Error/>,
          path:"*"
        }
    ])

   
  return (
    <div><RouterProvider router={appRoute}/></div>
  )
}

export default Body