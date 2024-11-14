import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/Firebaseconfig';
import { removeUser } from '../utils/userCart';
import { useNavigate } from 'react-router-dom';

function Header() {
    const user = useSelector((store) => store.user);
    const navigate=useNavigate();
    const dispatch = useDispatch();

    const onHandleSignout = async () => {
        try {
            await signOut(auth);
            dispatch(removeUser());
            navigate('/');  // Remove user data from Redux
        } catch (error) {
            console.error("Error signing out:", error.message);
        }
    };

    return (
        <div className='absolute w-full px-10 py-3 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img className='w-2/12 mx-25' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
            {user && (
                <div className='flex items-center m-3'>
                    <button className='px-2' onClick={onHandleSignout}>Sign Out</button>
                    <img src={user.photoURL} alt="User Avatar" className='w-16 h-15 px-1' />
                </div>
            )}
        </div>
    );
}

export default Header;
