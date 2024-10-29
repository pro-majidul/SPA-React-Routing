import React from 'react';
import './user.css'
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const { name , id , email , phone} = user
    return (
        <div className='flex'>
            <h3>{id}</h3>
            <p>Name {name}</p>
            <p>Email {email}</p>
            <p> Phone {phone}</p>
            <Link to={`/showdetails/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;