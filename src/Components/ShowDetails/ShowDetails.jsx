import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ShowDetails = () => {
    const user = useLoaderData()
    const nevigate = useNavigate();
    const GoBack = () =>{
        nevigate(-1)
    }
    return (
        <div>
            <p>Show Details </p>
            <h3>Name {user.name}</h3>
            <p>{user.company.catchPhrase}</p>
            <button onClick={GoBack}>Go Back</button>
        </div>
    );
};

export default ShowDetails;