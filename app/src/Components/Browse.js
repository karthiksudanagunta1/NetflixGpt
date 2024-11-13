import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

function Browse() {
    const user = useSelector((state) => state.user);
    // console.log(user)

    return (
        <div>
            <Header/>
        </div>
    );
}

export default Browse;
