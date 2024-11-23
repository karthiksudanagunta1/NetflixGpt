// Header.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/Firebaseconfig';
import { removeUser } from '../utils/userCart';
import { useNavigate } from 'react-router-dom';
import { nextflix_avatar } from '../utils/constants';
import { toggleGpt } from '../utils/gpt';

function Header() {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isgpt=useSelector((store)=>store.Gpt)

  console.log(isgpt);

  const onHandleSignout = async () => {
    const confirmSignout = window.confirm("Are you sure you want to sign out?");
    if (confirmSignout) {
      try {
        await signOut(auth);
        dispatch(removeUser());
        navigate('/');
      } catch (error) {
        console.error("Error signing out:", error.message);
      }
    }
  };

  const handleGpt=()=>{
    dispatch(toggleGpt());
  }

  return (
    <div className="absolute w-full top-0 h-28 left-0 px-10 bg-gradient-to-b from-black bg-opacity-70 z-30 flex justify-between items-center py-4">
      <img className="w-64" src={nextflix_avatar} alt="Netflix Logo" />
      {user && (
        <div className="flex items-center space-x-4">
          <button onClick={handleGpt} className='bg-red-500 rounded-lg w-20 h-10 text-white'>{isgpt.Gpt? "Home":"ChatGpt"}</button>
          <img
            src={user.photoURL}
            onClick={onHandleSignout}
            alt="User Avatar"
            className="w-12 h-12 rounded-full cursor-pointer hover:scale-150"
          />
        </div>
      )}
    </div>
  );
}

export default Header;
