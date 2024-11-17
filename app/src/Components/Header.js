import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/Firebaseconfig';
import { removeUser } from '../utils/userCart';
import { useNavigate } from 'react-router-dom';
import { nextflix_avatar } from '../utils/constants';

function Header() {
    const user = useSelector((store) => store.user);
    const navigate=useNavigate();
    const dispatch = useDispatch();

    const onHandleSignout = async () => {
        try {
            await signOut(auth);
            dispatch(removeUser());
            navigate('/');  
        } catch (error) {
            console.error("Error signing out:", error.message);
        }
    };

    return (
        <div className='absolute w-full px-10  bg-gradient-to-b from-black z-10 flex justify-between'>
            <img className='w-2/12 mx-25 ' src={nextflix_avatar} alt="logo" />
            {user && (
                <div className='flex items-center m-3'>
                    <button className='px-2' onClick={onHandleSignout}>Sign Out</button>
                    <img src={user.photoURL} alt="User Avatar" className='w-15 h-16 px-1 rounded-md' />
                </div>
            )}
        </div>
    );
}

export default Header;
