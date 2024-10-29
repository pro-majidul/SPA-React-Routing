import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SeeMore = () => {
    const post = useLoaderData()
    return (
        <div>
            <h3>{post.body} </h3>
        </div>
    );
};

export default SeeMore;<h3>See more</h3>