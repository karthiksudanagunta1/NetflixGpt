import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import {  useNavigate } from 'react-router-dom';

function Browse() {
    const user = useSelector((state) => state.user);
    const navigate=useNavigate();
    useEffect(()=>{
        if(!user){
         return navigate("/");
        }
        
    },[user])
    if(!user){
        return null;
    }
    return (
        <div>
            <Header/>
        </div>
    );
}

export default Browse;
