import React, {  useRef, useState } from 'react'
import Header from './Header'
import CheckValidation from '../utils/CheckValidation';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebaseconfig';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userCart';
import { user_avatar } from '../utils/constants';


function Login() {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const user=useSelector((store)=>store.user);

    const [isSignIn,SetIsSignIn]=useState(false);

    const [ErrorMessage,setErrorMessage]=useState('');
   
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);

    const handleFormData = async (e) => {
      e.preventDefault();
      const nameValue = name.current?.value || '';
      const emailValue = email.current.value;
      const passwordValue = password.current.value;
  
      const message = CheckValidation(nameValue, emailValue, passwordValue, isSignIn);
      setErrorMessage(message || '');
      if (message) return;
  
      if (isSignIn) {
          try {
              const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
              const user = userCredential.user;
  
              
              await updateProfile(user, { displayName: nameValue, photoURL: user_avatar });
              
              
              const updatedUser = auth.currentUser;
              if (updatedUser) {
                  const { uid, email, displayName, photoURL } = updatedUser;
                  dispatch(addUser({ uid, email, displayName, photoURL }));
              }
              navigate('/browse');
          } catch (error) {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
          }
      } else {
          try {
              const userCredential = await signInWithEmailAndPassword(auth, emailValue, passwordValue);
              const user = userCredential.user;
              navigate('/browse');
          } catch (error) {
              const errorCode = error.code;
              setErrorMessage(errorCode.slice(5));
          }
      }
  };
  

    const handleSignIn=()=>{
        SetIsSignIn(!isSignIn);
        setErrorMessage("");
        if (name.current) name.current.value = '';
        if (email.current) email.current.value = '';
        if (password.current) password.current.value = '';
    }

    if(user){
      return navigate('/browse');
      }

  return (
    <div className='w-full'>
        <Header/>
        <img className='absolute' src="" alt="logo"/>
        <div className='bg-black absolute my-32 mx-[520px]  h-[500px] w-[500px] opacity-90 rounded-lg'>
             <h1 className='text-white mx-5 mt-12 px-5 font-bold text-3xl'>{isSignIn?"Sign Up":"Sign In"}</h1>
            <form onSubmit={handleFormData} className='flex-col flex px-3 mx-2'>
                {
                    isSignIn&&(<input ref={name} tabIndex="1" className='p-4 m-4 rounded-lg bg-gray-600 hover:border text-white ' placeholder='Enter Your Name'/>)
                }
              <input type="Email" tabIndex="1" ref={email} className='p-4 m-4 rounded-lg bg-gray-600 text-white hover:border' placeholder='Email or mobile number'/>
              <input type="Password" tabIndex="1" ref={password} className='p-4 m-4 rounded-lg  bg-gray-600 hover:border  text-white ' placeholder='Enter the password'/>
              <p tabIndex="2" className='text-red-700 px-4 font-semibold text-lg'>{ErrorMessage}</p>
              <button tabIndex="3" className='bg-red-700 text-white mx-4  p-4 my-3 rounded-lg' type='submit'>{isSignIn?"Sign Up":"Sign In"}</button>
            </form>
            {
                !isSignIn?(<p className='text-gray-400 px-8' >New to Netflix? <span className='text-white cursor-pointer' tabIndex="4" onClick={handleSignIn}>Sign Up Now.</span></p>):(<p className='text-gray-400 px-8' >Already registered? <span className='text-white cursor-pointer' tabIndex="4"  onClick={handleSignIn}>Sign In Now.</span></p>)
            }
            
        </div>
    </div>
  )
}

export default Login