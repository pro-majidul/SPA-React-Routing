import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const SeeMore = () => {
    const post = useLoaderData()
    const nevigate = useNavigate()
    const Goback = () =>{
        nevigate(-1)
    }
    return (
        <div>
            <h3>{post.body} </h3>
            <button onClick={Goback}>Go back</button>
            <Link to="/">Go Home</Link>
        </div>
    );
};

export default SeeMore;<h3>See more</h3>