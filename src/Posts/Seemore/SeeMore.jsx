import React from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';

const SeeMore = () => {
    const post = useLoaderData()
    const nevigate = useNavigate()
    const {id} = useParams()
    console.log(id);
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