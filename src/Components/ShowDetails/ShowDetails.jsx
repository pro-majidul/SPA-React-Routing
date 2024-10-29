import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowDetails = () => {
    const user = useLoaderData()
    console.log(user);
    return (
        <div>
            <p>Show Details </p>
            <h3>Name {user.name}</h3>
            <p>{user.company.catchPhrase}</p>
        </div>
    );
};

export default ShowDetails;