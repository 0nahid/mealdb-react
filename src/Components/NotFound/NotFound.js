import React from 'react';
import './NotFound.css'
import {BiError} from 'react-icons/bi';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h2>404 Not Found!</h2>
            <BiError className='error'></BiError>
        </div>
    );
};

export default NotFound;