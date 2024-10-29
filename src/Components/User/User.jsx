import React from 'react';

const User = ({user}) => {
    const { name , id , email} = user
    return (
        <div>
            <h3>{id}</h3>
            <p>Name {name}</p>
            <p>Email {email}</p>
        </div>
    );
};

export default User;