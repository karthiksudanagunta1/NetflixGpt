import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import {onAuthStateChanged} from "firebase/auth";
import { auth } from '../utils/Firebaseconfig';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userCart';

function Body() {
    const dispatch=useDispatch();


    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayname} = user;
            //   console.log(user);
              dispatch(addUser({uid,email,displayname}))
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
        }
    ])

   
  return (
    <div><RouterProvider router={appRoute}/></div>
  )
}

export default Body